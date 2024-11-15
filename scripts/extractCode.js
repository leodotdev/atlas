#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const config = {
  gitUrl: "git@github.com:gluestack/gluestack-ui.git",
  components: [
    { name: "checkbox", path: "example/storybook-nativewind/src/components/Checkbox/index.nw.stories.mdx" },
    { name: "button", path: "example/storybook-nativewind/src/components/Button/index.nw.stories.mdx" },
    { name: "radio", path: "example/storybook-nativewind/src/components/Radio/index.nw.stories.mdx" },
    { name: "form-control", path: "example/storybook-nativewind/src/components/FormControl/index.nw.stories.mdx" },
    { name: "alert", path: "example/storybook-nativewind/src/components/Alert/index.nw.stories.mdx" },
  ],
  branchName: "fix/button-extract",
  destinationDir: path.join(__dirname, "../components/docs/examples/"),
  cloneDir: path.join(__dirname, "../gluestack-ui"),
};

async function cloneOrUpdateRepo() {
  const repoPath = config.cloneDir;

  try {
    if (fs.existsSync(repoPath)) {
      console.log("Removing existing repository directory...");
      fs.removeSync(repoPath);

      if (fs.existsSync(repoPath)) {
        console.error("Failed to remove existing repository directory. Please check permissions.");
        process.exit(1);
      }
    }

    console.log("Cloning repository...");
    execSync(`git clone ${config.gitUrl} --branch ${config.branchName} ${repoPath}`, {
      stdio: "inherit",
    });
  } catch (error) {
    console.error("Error during cloning:", error);
    process.exit(1);
  }

  return repoPath;
}

async function extractCodeFromExamplesSection(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const startIndex = fileContent.indexOf("### Examples");

    if (startIndex === -1) {
      console.error(`### Examples section not found in the file: ${filePath}`);
      return "";
    }

    return fileContent.slice(startIndex).trim();
  } catch (error) {
    console.error(`Error reading or processing the file: ${filePath}`, error);
    return "";
  }
}

async function saveExtractedContentToFile(componentName, extractedContent) {
  const destPath = path.join(config.destinationDir, componentName);
  const outputFilePath = path.join(destPath, "extracted_code.mdx");

  if (extractedContent) {
    fs.ensureDirSync(destPath);
    fs.writeFileSync(outputFilePath, extractedContent);
    console.log(`Extracted content for "${componentName}" saved to ${outputFilePath}`);
  } else {
    console.error(`No content to save for "${componentName}".`);
  }
}

async function processComponents(repoPath) {
  for (const { name, path: componentPath } of config.components) {
    console.log(`Processing component: ${name}`);
    const filePath = path.join(repoPath, componentPath);

    const extractedCode = await extractCodeFromExamplesSection(filePath);
    await saveExtractedContentToFile(name, extractedCode);
  }
}

async function main() {
  try {
    const repoPath = await cloneOrUpdateRepo();
    await processComponents(repoPath);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
