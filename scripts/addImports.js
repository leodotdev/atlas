const fs = require("fs");
const path = require("path");

// Path to the examples.js file
const examplesFilePath = path.join(
  __dirname,
  "..",
  "components",
  "docs",
  "examples",
  "button",
  "examples.js"
);

// Base path to the components folder
const componentsBasePath = path.join(__dirname, "..", "components", "ui");

// Regular expressions to detect component tags and 'as' prop usage
const componentRegex = /<([A-Za-z][A-Za-z0-9]*)/g;
const asPropRegex = /as={([A-Za-z][A-Za-z0-9]*)}/g;

function extractComponents(code) {
  const components = new Set();
  let match;

  // Find component tags
  while ((match = componentRegex.exec(code)) !== null) {
    components.add(match[1]);
  }

  // Check for 'colors.' in the code
  if (code.includes("colors.")) {
    components.add("colors");
  }

  // Check for 'as' prop usage
  while ((match = asPropRegex.exec(code)) !== null) {
    components.add(match[1]);
  }

  // Extract hooks starting with 'use'
  const hookRegex = /\buse[A-Za-z0-9]+/g;
  while ((match = hookRegex.exec(code)) !== null) {
    const hook = match[0];
    if (hook.startsWith("use")) {
      components.add(hook); // Add hooks like useState, useEffect, etc.
    }
  }

  return Array.from(components);
}

// Function to get exported components from a file
function getExportedComponents(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Regular expression to match all export { ... } statements
  const exportRegex = /export\s*{([^}]+)}/g;

  let matches;
  const exportedComponents = [];

  // Find all export statements
  while ((matches = exportRegex.exec(fileContent)) !== null) {
    // Split the matched export into individual components
    const components = matches[1]
      .split(",")
      .map((component) => component.trim());

    // Add each component to the list of exported components
    exportedComponents.push(...components);
  }

  return exportedComponents;
}

// Function to generate import statements based on component usage
function generateImports(components) {
  const imports = [];
  let isIconImported = false; // Flag to control when to add icon import only once
  const importedComponents = []; // Track imported components

  components.forEach((component) => {
    let componentPath;

    // Check if component name ends with "Icon"
    if (component.endsWith("Icon")) {
      componentPath = path.join(componentsBasePath, "icon", "index.tsx");
    } else {
      componentPath = path.join(
        componentsBasePath,
        component.toLowerCase(),
        "index.tsx"
      );
    }

    if (fs.existsSync(componentPath)) {
      // Get exported components from the index.tsx file
      const exportedComponents = getExportedComponents(componentPath);
      const neededComponents = exportedComponents.filter((exp) =>
        components.includes(exp)
      );

      // Check if all components are icons
      let isAllIcons = false;
      if (neededComponents.every((comp) => comp.endsWith("Icon"))) {
        isAllIcons = true;
      }

      if (neededComponents.length > 0) {
        // If all components are icons, import from the icon folder
        if (isAllIcons) {
          if (!isIconImported) {
            imports.push(
              `import { ${neededComponents.join(", ")} } from '@/components/ui/icon';`
            );
            isIconImported = true; // Ensure we only add one import for icons
            importedComponents.push(...neededComponents);
          }
        } else {
          // Otherwise, import components from their respective paths
          imports.push(
            `import { ${neededComponents.join(", ")} } from '@/components/ui/${component.toLowerCase()}';`
          );
          importedComponents.push(...neededComponents);
        }
      }
    }
  });

  if (importedComponents.length === components.length) {
    return imports; // Return imports if all components are imported
  } else {
    // Find the remaining components that are not yet imported
    const leftComponents = components.filter(
      (comp) => !importedComponents.includes(comp)
    );

    // Filter out the components that start with 'use' (hooks)
    const hooks = leftComponents.filter((comp) => comp.startsWith("use"));
    // Filter out the components that are 'colors'
    const colors = leftComponents.filter((comp) => comp === "colors");
    // The remaining components that are neither hooks nor 'colors'
    const otherComponentsWithoutHooks = leftComponents.filter(
      (comp) => !comp.startsWith("use")
    );

    const otherComponents = otherComponentsWithoutHooks.filter(
      (comp) => comp !== "colors"
    );

    // Import hooks from 'React'
    if (hooks.length > 0) {
      imports.push(`import { ${hooks.join(", ")} } from 'react';`);
    }

    // Import 'colors' from 'tailwindcss/colors'
    if (colors.length > 0) {
      imports.push(`import colors from 'tailwindcss/colors';`);
    }

    // Add missing components from 'lucide-react-native'
    if (otherComponents.length > 0) {
      imports.push(
        `import { ${otherComponents.join(", ")} } from 'lucide-react-native';`
      );
    }

    return imports; // Return the updated imports
  }
}

// Function to parse examples and extract components from the Code fields
function extractAllComponents() {
  try {
    const fileContent = fs.readFileSync(examplesFilePath, "utf-8");
    const examples = eval(fileContent + "\nexamples;");

    const allComponents = new Set();

    examples.forEach(({ Code }) => {
      const components = extractComponents(Code);
      components.forEach((component) => allComponents.add(component));
    });

    const importStatements = generateImports(Array.from(allComponents));

    // Prepare content for the new file
    const newFileContent = [
      "// Import Statements",
      ...importStatements,
      "// Examples",
      "export const examples = [",
      ...examples.map(({ name, Code }) => {
        return `  {\n    name: "${name}",\n    Code: (\n      ${Code}\n    )\n  },`;
      }),
      "]",
    ].join("\n");

    // Path to the new file
    const newFilePath = path.join(__dirname, "..",
  "components",
  "docs",
  "examples",
  "button",
  "index.js");

    // Ensure the output directory exists
    fs.mkdirSync(path.dirname(newFilePath), { recursive: true });

    // Write to the new file
    fs.writeFileSync(newFilePath, newFileContent, "utf-8");

    console.log("Combined file created successfully at:", newFilePath);
  } catch (error) {
    console.error("Error extracting imports:", error.message);
  }
}

// Run the extraction function
extractAllComponents();
