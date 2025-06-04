const fs = require("fs-extra");
const { PostsModel } = require("./db");
const path = require("path");

const readmeHeader = `# JavaScript LeetCode Solutions

This repository contains solutions to 100+ LeetCode problems written in **JavaScript**.  
Each problem is solved in multiple ways — from brute force to optimized techniques.  
The goal is to demonstrate different approaches and help improve problem-solving skills.

All solutions have been tested using a custom script. Most of them should work correctly,  
though there may be occasional breakages depending on edge cases or updates on LeetCode's platform.

> 🚫 This project does not currently accept external contributions, as all content is generated dynamically from a MongoDB database.
`;

const licenseSection = `## 📄 License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.
`;

async function generateReadme() {
  try {
    // Fetch and sort published posts
    const data = await PostsModel.find({ published: true }).sort({ title: 1 });

    // Prepare Markdown table
    let tableSection = `## 📄 Problem List (${data.length} problems)\n\n`;
    tableSection += `| # | Title | Link |\n`;
    tableSection += `|---|-------|------|\n`;

    data.forEach((doc, index) => {
      const safeTitle = doc.title.replace(/\|/g, "\\|"); // Escape pipes
      const link = `[Link](./solutions/${doc.slug})`;
      tableSection += `| ${index + 1} | ${safeTitle} | ${link} |\n`;
    });

    // Final README content
    const finalContent = `${readmeHeader}\n\n${tableSection}\n\n${licenseSection}`;

    // Write to project root
    const readmePath = path.join(process.cwd(), "README.md");
    await fs.writeFile(readmePath, finalContent, "utf8");

    console.log("✅ README.md generated successfully with numbering.");
  } catch (error) {
    console.error("❌ Error generating README.md:", error);
  }
}

module.exports = generateReadme;
