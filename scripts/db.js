const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://127.0.0.1:27017/dsa";

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // exit on fail
  }
}

async function disconnectDB() {
  await mongoose.disconnect();
  console.log("MongoDB disconnected");
}

const postSchema = new mongoose.Schema({}, { strict: false });
const PostsModel = mongoose.model("Post", postSchema, "posts");

module.exports = {
  connectDB,
  disconnectDB,
  PostsModel,
};
