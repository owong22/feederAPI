const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/allData", (req, res) => {
  const RMC1_2 = { material: 4.27, labor: 10.9 };
  const RMC3_4 = { material: 4.62, labor: 12.25 };
  const RMC1 = { material: 7.0, labor: 15.05 };
  const RMC1_1_4 = { material: 10.25, labor: 16.35 };
  const RMC1_1_2 = { material: 11.7, labor: 17.8 };
  const RMC2 = { material: 14.75, labor: 21.5 };
  const RMC2_1_2 = { material: 29.0, labor: 28.0 };
  const RMC3 = { material: 32.5, labor: 39.0 };
  const RMC3_1_2 = { material: 41.0, labor: 44.5 };
  const RMC4 = { material: 44.0, labor: 49.0 };

  const EMT1_2 = { material: 1.19, labor: 5.75 };
  const EMT3_4 = { material: 1.85, labor: 7.5 };
  const EMT1 = { material: 3.13, labor: 8.5 };
  const EMT1_1_4 = { material: 5.15, labor: 9.8 };
  const EMT1_1_2 = { material: 6.45, labor: 10.9 };
  const EMT2 = { material: 7.9, labor: 12.25 };
  const EMT2_1_2 = { material: 10.4, labor: 16.35 };
  const EMT3 = { material: 13.1, labor: 19.6 };
  const EMT3_1_2 = { material: 16.85, labor: 21.5 };
  const EMT4 = { material: 17.75, labor: 24.5 };

  const THWN14 = { material: 12.9, labor: 75.5 };
  const THWN12 = { material: 52.0, labor: 89.0 };
  const THWN10 = { material: 29.5, labor: 98.0 };

  const THWN8 = { material: 60.0, labor: 123.0 };
  const THWN6 = { material: 93.5, labor: 151.0 };
  const THWN4 = { material: 147.0, labor: 185.0 };

  const THW3 = { material: 163.0, labor: 196.0 };
  const THW2 = { material: 216.0, labor: 218.0 };
  const THW1 = { material: 238.0, labor: 245.0 };

  const THW1_0 = { material: 287.0, labor: 296.0 };
  const THW2_0 = { material: 395.0, labor: 340.0 };
  const THW3_0 = { material: 475.0, labor: 390.0 };

  const THW4_0 = { material: 535.0, labor: 445.0 };
  const THW250 = { material: 690.0, labor: 490.0 };
  const THW300 = { material: 900.0, labor: 515.0 };

  const THW350 = { material: 1050.0, labor: 545.0 };
  const THW400 = { material: 1175.0, labor: 570.0 };
  const THW500 = { material: 1475.0, labor: 610.0 };

  res.json({
    RMC1_2,
    RMC3_4,
    RMC1,
    RMC3_1_2,
    RMC1_1_4,
    RMC1_1_2,
    RMC2,
    RMC2_1_2,
    RMC3,
    RMC4,
    EMT1_2,
    EMT3_4,
    EMT1,
    EMT1_1_4,
    EMT1_1_2,
    EMT2,
    EMT2_1_2,
    EMT3,
    EMT3_1_2,
    EMT4,

    THWN14,
    THWN12,
    THWN10,

    THWN8,
    THWN6,
    THWN4,

    THW3,
    THW2,
    THW1,

    THW1_0,
    THW2_0,
    THW3_0,

    THW4_0,
    THW250,
    THW300,

    THW350,
    THW400,
    THW500,
  });
});

app.get("/comments/:id", async (req, res) => {
  id = req.params.id;
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
