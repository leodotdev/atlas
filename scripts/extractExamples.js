const fs = require('fs');
const path = require('path');

// Function to extract example name and code from <CodePreview> components
function extractExamplesCode(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Regular expression to match the example name (headers)
    const exampleNameRegex = /####\s*(.*)/g;
    
    // Regular expression to match the code inside metaData prop (code: `...`)
    const codeRegex = /metaData\s*=\s*{[^}]*\s*code\s*:\s*`([^`]+)`/g;

    const examples = [];
    let nameMatch, codeMatch;

    while ((nameMatch = exampleNameRegex.exec(fileContent)) !== null) {
      // Capture the example name (e.g., Button with Loading State)
      const exampleName = nameMatch[1].trim();
      
      // Capture the code for this example
      if ((codeMatch = codeRegex.exec(fileContent)) !== null) {
        let code = codeMatch[1].trim();

        // Clean up the code format and remove {" "} and unnecessary spaces
        code = code.replace(/\s*{"\s*"\s*}\s*/g, ''); // Removes {" "} artifacts
        code = code.replace(/\s+/g, ' '); // Replaces multiple spaces with a single space
        code = code.replace(/>\s+/g, '>').replace(/\s+</g, '<'); // Removes spaces around JSX tags

        // Push the example name and code into the examples array
        examples.push({
          name: exampleName,
          Code: `\`${code}\``
        });
      }
    }

    return examples;
  } catch (error) {
    console.error('Error reading or processing the file:', error);
    return [];
  }
}

// List of components to process
const components = [
  { name: 'checkbox', filePath: 'example/storybook-nativewind/src/components/Checkbox/index.nw.stories.mdx' },
  { name: 'button', filePath: 'example/storybook-nativewind/src/components/Button/index.nw.stories.mdx' },
  { name: 'radio', filePath: 'example/storybook-nativewind/src/components/Radio/index.nw.stories.mdx' },
  { name: 'form-control', filePath: 'example/storybook-nativewind/src/components/FormControl/index.nw.stories.mdx' },
  { name: 'alert', filePath: 'example/storybook-nativewind/src/components/Alert/index.nw.stories.mdx' }
];

// Output directory for all component files
const outputBaseDir = path.join(__dirname, '..', 'components', 'docs', 'examples');

// Function to process and extract examples for all components
function processComponents() {
  components.forEach(({ name, filePath }) => {
    const extractedFilePath = path.join(__dirname, '..', 'gluestack-ui', filePath);

    // Extract examples from the component file
    const examples = extractExamplesCode(extractedFilePath);

    // Define the output file path
    const outputFilePath = path.join(outputBaseDir, name, 'examples.js');

    if (examples.length > 0) {
      // Define the header content for the final .js file
      const fileHeader = `const examples = [\n`;

      // Combine header, examples, and footer into the final file content
      const fileContent = fileHeader + examples.map(example => `
        {
          name: "${example.name}",
          Code: ${example.Code}
        }`).join(',\n') + '\n];';

      // Ensure the directory exists for the output file
      // fs.ensureDirSync(path.dirname(outputFilePath));

      // Write the file content to the output.js in the component's directory
      fs.writeFileSync(outputFilePath, fileContent, 'utf-8');
      console.log(`Extracted examples for "${name}" saved to: ${outputFilePath}`);
    } else {
      console.log(`No examples found in the <CodePreview> components for "${name}".`);
    }
  });
}

// Run the script to process all components
processComponents();
