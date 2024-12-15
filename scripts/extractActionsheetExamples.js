const fs = require("fs");
const path = require("path");

const components = [
  "accordion",
  "actionsheet",
  "alert",
  "alert-dialog",
  "avatar",
  "badge",
  "bottomsheet",
  "box",
  "button",
  "card",
  "center",
  "checkbox",
  "divider",
  "drawer",
  "fab",
  "form-control",
  "grid",
  "heading",
  "hstack",
  "icon",
  "image",
  "input",
  "link",
  "menu",
  "modal",
  "popover",
  "portal",
  "pressable",
  "progress",
  "radio",
  "select",
  "skeleton",
  "slider",
  "spinner",
  "switch",
  "table",
  "text",
  "textarea",
  "toast",
  "tooltip",
  "vstack",
];

function extractExamplesCode(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const uncommentedContent = fileContent
      .replace(/{\s*\/\*[\s\S]*?\*\/\s*}/g, "")
      .replace("{...props}", "");

    const sections = uncommentedContent.split(/(?=####)/);
    const examples = [];

    for (const section of sections) {
      if (!section.startsWith("####")) continue;

      const nameMatch = section.match(/####\s*(.*?)(?=\n)/);
      if (!nameMatch) continue;

      const exampleName = nameMatch[1].trim();
      const subNameMatches = section.match(/\*\*(.*?)\*\*/g);

      if (subNameMatches) {
        const subExamples = [];
        const codeMatches = [
          ...section.matchAll(/metaData\s*=\s*{[^}]*\s*code\s*:\s*`([^`]+)`/g),
        ];

        for (
          let i = 0;
          i < subNameMatches.length && i < codeMatches.length;
          i++
        ) {
          const subName = subNameMatches[i].replace(/\*\*/g, "").trim();
          let code = codeMatches[i][1].trim();
          code = code
            .replace(/\s*{"\s*"\s*}\s*/g, "")
            .replace(/\s+/g, " ")
            .replace(/>\s+/g, ">")
            .replace(/\s+</g, "<");

          subExamples.push({
            subName,
            Code: code,
          });
        }

        if (subExamples.length > 0) {
          examples.push({
            name: exampleName,
            subExamples,
          });
          continue;
        }
      }

      const codeMatch = section.match(
        /metaData\s*=\s*{[^}]*\s*code\s*:\s*`([^`]+)`/
      );
      if (codeMatch) {
        let code = codeMatch[1].trim();
        code = code
          .replace(/\s*{"\s*"\s*}\s*/g, "")
          .replace(/\s+/g, " ")
          .replace(/>\s+/g, ">")
          .replace(/\s+</g, "<");

        examples.push({
          name: exampleName,
          Code: code,
        });
      }
    }

    return examples;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

async function processComponent(componentName) {
  const extractedFilePath = path.join(
    __dirname,
    "..",
    "components",
    "docs",
    "examples",
    componentName,
    "extracted_code.mdx"
  );

  if (!fs.existsSync(extractedFilePath)) {
    console.log(`No mdx file found for ${componentName}, skipping...`);
    return;
  }

  const outputFilePath = path.join(
    path.dirname(extractedFilePath),
    "examples.js"
  );

  const examples = extractExamplesCode(extractedFilePath);

  if (examples.length > 0) {
    // Create the output content with proper formatting
    let fileContent = "export const examples = [\n";

    examples.forEach((example, index) => {
      fileContent += "  {\n";
      fileContent += `    name: "${example.name}",\n`;

      if (example.subExamples) {
        fileContent += "    subExamples: [\n";
        example.subExamples.forEach((subExample, subIndex) => {
          fileContent += "      {\n";
          fileContent += `        subName: "${subExample.subName}",\n`;
          fileContent += `        Code: ${subExample.Code}\n`;
          fileContent +=
            "      }" +
            (subIndex < example.subExamples.length - 1 ? "," : "") +
            "\n";
        });
        fileContent += "    ]\n";
      } else {
        fileContent += `    Code: ${example.Code}\n`;
      }

      fileContent += "  }" + (index < examples.length - 1 ? "," : "") + "\n";
    });

    fileContent += "];";

    fs.writeFileSync(outputFilePath, fileContent, "utf-8");
    console.log(`Extracted examples saved to: ${outputFilePath}`);
  } else {
    console.log("No examples found in the file.");
  }
}

async function processAllComponents() {
  console.log("🚀 Starting component processing...\n");

  for (const component of components) {
    await processComponent(component);
  }
//   await processComponent("actionsheet");

  console.log("\n✨ All components processed!");
}

processAllComponents();
