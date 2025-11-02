import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, testing pull request!");
});

export default app;