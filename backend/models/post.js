const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    user: { type: String, required: true },
    description: { type: String, required: false },
    imagelink: { type: String, required: false },
    likes: { type: Number, required: false },
    createdAt: { type: Date, required: false , default: Date.now},
    
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
