const { connectDB, disconnectDB } = require("./db");
const generateReadme = require("./generate_readme");
const generateSolutions = require("./generate_solutions");

async function main() {
  try {
    await connectDB();

    await generateSolutions();
    await generateReadme();

    console.log("All generation tasks completed successfully!");
  } catch (err) {
    console.error("An error occurred during execution:", err);
  } finally {
    await disconnectDB();
  }
}

main();
