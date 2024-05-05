// const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const Blogs = require("./Models/BlogModel");
const Portfolio = require("./Models/PortfolioModel");
const Focus = require("./Models/FocusModel");
const app = express();
app.use(express.json());

// app.use(
//   cors({
//     credentials: true,
//     // origin: "http://localhost:5173",
//     // true, origin: "https://vertiline-synergy.onrender.com"
//     origin: "https://vsl-sand.vercel.app/",
//   })
// );

app.options("*", cors());

process.on("uncaughtException", (err) => {
  console.log(err.message);
  console.log("UNCAUGHT EXCEPTION... Server Is Shutting Down 😪😪!");
});

// dotenv.config({ path: "./Server/config.env" });
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB Successfully Connected 🥳🥳"));

const port = process.env.port || 4000;

const server = app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.message);
  console.log(
    "UNHANDLED REJECTION.... KINDLY CONNECT TO THE INTERNET 😎🤔🤨!!!"
  );
  server.close(() => process.exit(1));
});

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.json(blogs);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

app.get("/api/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blogs = await Blogs.findById(id);
    res.json(blogs);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

app.get("/api/portfolios", async (req, res) => {
  try {
    const portfolios = await Portfolio.find();

    res.json(portfolios);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/api/portfolios/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const portfolios = await Portfolio.findById(id);

    res.json(portfolios);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/api/businessFocus", async (req, res) => {
  try {
    const businessFocus = await Focus.find();

    res.json(businessFocus);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/api/businessFocus/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const businessFocus = await Focus.findById(id);

    res.json(businessFocus);
  } catch (err) {
    console.log(err.message);
  }
});

process.on("SIGTERM", () => {
  console.log("SIGTERM RECEVIED, Server Shutting Down Gracefully 😎");
  server.close(() => {
    console.log("Process Terminated 🔥🔥");
  });
});
