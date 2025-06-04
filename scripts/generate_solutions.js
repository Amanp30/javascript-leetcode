const { PostsModel } = require("./db");
const fs = require("fs-extra");
const TurndownService = require("turndown");
const path = require("path");

const turndownService = new TurndownService();

async function generateSolutions() {
  try {
    const data = await PostsModel.find({ published: true });

    for (const post of data) {
      const { title, slug, problemContent, solutions, examples } = post;

      if (!slug || !problemContent || !Array.isArray(solutions)) continue;

      const filePath = path.join("solutions", `${slug}.md`);
      const markdownProblem = turndownService.turndown(problemContent || "");

      // Example Section
      const exampleSection = renderExamples(examples || []);

      // Solutions Section
      const solutionsSection = (solutions || [])
        .map((sol, index) => {
          const solTitle = sol.title?.trim() || `Approach ${index + 1}`;
          return `### 💡 Solution ${
            index + 1
          }: ${solTitle}\n\n\`\`\`javascript\n${sol.code.trim()}\n\`\`\``;
        })
        .join("\n\n");

      const fileContent = `
# ${title}

## 📝 Problem

${markdownProblem.trim()}

${exampleSection}

---

## ✅ Solutions

${solutionsSection}
`;

      await fs.outputFile(filePath, fileContent.trim());
    }

    console.log("✅ All solution files generated successfully.");
  } catch (err) {
    console.error("❌ Error generating solutions:", err);
  }
}

// Renders example blocks in Markdown
function renderExamples(examples) {
  if (!examples.length) return "";

  return (
    `\n## 📌 Examples\n\n` +
    examples
      .map((example, index) => {
        const inputStr = renderInputs(example.inputs || []);
        const outputStr = formatOutput(example.output);

        return `### Example ${
          index + 1
        }\n\n**Input:** ${inputStr}  \n**Output:** ${outputStr}`;
      })
      .join("\n\n")
  );
}

// Renders formatted inputs
function renderInputs(inputs) {
  return inputs
    .map((input) => {
      const value = ["string", "date"].includes(input.type)
        ? `"${input.value}"`
        : input.value;
      return `${input.variableName} = ${value}`;
    })
    .join(", ");
}

// Formats output based on type
function formatOutput(output) {
  if (!output) return "";

  const { type, value } = output;

  if (type === "error") return `❌ Throw error => ${value}`;
  if (["string", "date"].includes(type)) return `"${value}"`;
  return value;
}

module.exports = generateSolutions;
