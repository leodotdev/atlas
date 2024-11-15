#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const config = {
  gitUrl: "git@github.com:gluestack/gluestack-ui.git",
  componentPath: "example/storybook-nativewind/src/components/Checkbox/index.nw.stories.mdx", // Path to the file to extract from
  branchName: "fix/button-extract",
  destinationDir: path.join(__dirname, "../components/docs/examples/checkbox"), // Destination for the extracted file
  cloneDir: path.join(__dirname, "../gluestack-ui"), // Directory to clone the repo into
};

async function cloneOrUpdateRepo() {
  const repoPath = config.cloneDir;

  try {
    // Check if the repository directory exists and remove it if it does
    if (fs.existsSync(repoPath)) {
      console.log("Removing existing repository directory...");
      fs.removeSync(repoPath);
      
      // Confirm deletion
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
    
    // Find the position of the "### Examples" string
    const startIndex = fileContent.indexOf("### Examples");

    if (startIndex === -1) {
      console.error("### Examples section not found in the file.");
      return "";
    }

    // Extract everything from the start of "### Examples" section onwards
    const extractedContent = fileContent.slice(startIndex).trim();

    return extractedContent;
  } catch (error) {
    console.error("Error reading or processing the file:", error);
    return "";
  }
}

async function saveExtractedContentToFile(extractedContent) {
  const destPath = config.destinationDir;
  const outputFilePath = path.join(destPath, "extracted_code.mdx"); // Save the extracted content as .mdx file

  if (extractedContent) {
    fs.ensureDirSync(destPath); // Ensure the destination directory exists
    fs.writeFileSync(outputFilePath, extractedContent); // Write the extracted content to a file
    console.log(`Extracted content saved to ${outputFilePath}`);
  } else {
    console.error("No content to save.");
  }
}

async function main() {
  try {
    const repoPath = await cloneOrUpdateRepo();
    const filePath = path.join(repoPath, config.componentPath);

    // Extract code after "### Examples" (including the section header)
    const extractedCode = await extractCodeFromExamplesSection(filePath);
    await saveExtractedContentToFile(extractedCode); // Save the extracted content to a file
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
