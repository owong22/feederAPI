const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(express.cors());

app.get("/outfit", (req, res) => {
  const tops = ["black", "orange", "navy"];
  const jeans = ["skinny", "blue", "gray"];
  res.json({ top: _.sample(tops), jeans: _.sample(jeans) });
});

app.get("/comments/:id", async (req, res) => {
  const id = req.params.id;
  let content;
  try {
    content = await fs.readFile(`data/comments/${id}.txt`, "utf-8");
  } catch (err) {
    return res.sendStatus(404);
  }
  res.json({
    content: content,
  });
});

app.post("/comments", async (req, res) => {
  const id = uuid();
  const content = req.body.content;

  if (!content) {
    return res.sendStatus(400);
  }

  await fs.mkdir("data/comments", { recursive: true });
  await fs.writeFile(`data/comments/${id}.txt`, content);
  console.log(content);
  res.status(201).json({ id: id });
});

app.listen(3000, () => console.log("API server is running..."));
