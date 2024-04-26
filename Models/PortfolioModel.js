const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: String,
  location: String,
  instagram: String,
  concept: String,
  role: String,
  image: String,
  img: String,
  img3: String,
  concept1: String,
  concept2: String,
  concept3: String,
  structure: String,
  technicalAdvisory: String,
  techAdv1: String,
  techAdv2: String,
  techAdv3: String,
  techAdv4: String,
  techAdv5: String,
  techAdv6: String,
  techAdv7: String,
  techAdv8: String,
  techAdv9: String,
  techAdv10: String,
  techAdv11: String,
  techAdv12: String,
  techAdv13: String,
  techAdv14: String,
  techAdv15: String,
  techAdv16: String,
  techAdv17: String,
  techAdv18: String,
});

const Portfolio = mongoose.model("portfolios", portfolioSchema);

module.exports = Portfolio;
