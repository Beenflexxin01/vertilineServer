const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: String,
  minText: String,
  blogDescription: String,
  economicHead: String,
  economicText: String,
  culturalHead: String,
  culturalText: String,
  empoweringHead: String,
  empoweringText: String,
  infrastructuralHead: String,
  infrastructuralText: String,
  bigFamilyHead: String,
  bigFamilyText: String,
  topic: String,
  topic1: String,
  who: String,
  whoText: String,
  topics: String,
  keyNote: String,
  keyTopic: String,
  topic2: String,
  topic3: String,
  topic4: String,
  topic5: String,
  topic6: String,
  topic7: String,
  topic8: String,
  topic9: String,
  topic10: String,
  topic11: String,
});

const Blogs = mongoose.model("blogs", blogSchema);

module.exports = Blogs;
