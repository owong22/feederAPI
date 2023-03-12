const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

// Values to be updated once cost works updates their prices

// const RMCMaterial1_2=
// const RMCMaterial3_4=
// const RMCMaterial1=
// const RMCMaterial1_1_4=
// const RMCMaterial1_1_2=
// const RMCMaterial2=
// const RMCMaterial2_1_2=
// const RMCMaterial3=
// const RMCMaterial3_1_2=
// const RMCMaterial4=
const RMCMaterial1_2 = 4.27;
const RMCMaterial3_4 = 4.62;
const RMCMaterial1 = 7.0;
const RMCMaterial1_1_4 = 10.25;
const RMCMaterial1_1_2 = 11.7;
const RMCMaterial2 = 14.75;
const RMCMaterial2_1_2 = 29.0;
const RMCMaterial3 = 32.5;
const RMCMaterial3_1_2 = 41.0;
const RMCMaterial4 = 44.0;

// const RMCLabor1_2=
// const RMCLabor3_4=
// const RMCLabor1=
// const RMCLabor1_1_4=
// const RMCLabor1_1_2=
// const RMCLabor2=
// const RMCLabor2_1_2=
// const RMCLabor3=
// const RMCLabor3_1_2=
// const RMCLabor4=
const RMCLabor1_2 = 10.9;
const RMCLabor3_4 = 12.25;
const RMCLabor1 = 15.05;
const RMCLabor1_1_4 = 16.35;
const RMCLabor1_1_2 = 17.8;
const RMCLabor2 = 21.5;
const RMCLabor2_1_2 = 28.0;
const RMCLabor3 = 39.0;
const RMCLabor3_1_2 = 44.5;
const RMCLabor4 = 49.0;

// const EMTMaterial1_2=
// const EMTMaterial3_4=
// const EMTMaterial1=
// const EMTMaterial1_1_4=
// const EMTMaterial1_1_2=
// const EMTMaterial2=
// const EMTMaterial2_1_2=
// const EMTMaterial3=
// const EMTMaterial3_1_2=
// const EMTMaterial4=
const EMTMaterial1_2 = 1.19;
const EMTMaterial3_4 = 1.85;
const EMTMaterial1 = 3.13;
const EMTMaterial1_1_4 = 5.15;
const EMTMaterial1_1_2 = 6.45;
const EMTMaterial2 = 7.9;
const EMTMaterial2_1_2 = 10.4;
const EMTMaterial3 = 13.1;
const EMTMaterial3_1_2 = 16.85;
const EMTMaterial4 = 17.75;

// const EMTLabor1_2=
// const EMTLabor3_4=
// const EMTLabor1=
// const EMTLabor1_1_4=
// const EMTLabor1_1_2=
// const EMTLabor2=
// const EMTLabor2_1_2=
// const EMTLabor3=
// const EMTLabor3_1_2=
// const EMTLabor4=
const EMTLabor1_2 = 5.75;
const EMTLabor3_4 = 7.5;
const EMTLabor1 = 8.5;
const EMTLabor1_1_4 = 9.8;
const EMTLabor1_1_2 = 10.9;
const EMTLabor2 = 12.25;
const EMTLabor2_1_2 = 16.35;
const EMTLabor3 = 19.6;
const EMTLabor3_1_2 = 21.5;
const EMTLabor4 = 24.5;

// const THWN14Material =
// const THWN12Material =
// const THWN10Material =
// const THWN8Material =
// const THWN6Material =
// const THWN4Material =
// const THW3Material =
// const THW2Material =
// const THW1Material =
// const THW1_0Material =
// const THW2_0Material =
// const THW3_0Material =
// const THW4_0Material =
// const THW250Material=
// const THW300Material=
// const THW350Material =
// const THW400Material=
// const THW500Material =
const THWN14Material = 12.9;
const THWN12Material = 52.0;
const THWN10Material = 29.5;
const THWN8Material = 60.0;
const THWN6Material = 93.5;
const THWN4Material = 147.0;
const THW3Material = 163.0;
const THW2Material = 216.0;
const THW1Material = 238.0;
const THW1_0Material = 287.0;
const THW2_0Material = 395.0;
const THW3_0Material = 475.0;
const THW4_0Material = 535.0;
const THW250Material = 690.0;
const THW300Material = 900.0;
const THW350Material = 1050.0;
const THW400Material = 1175.0;
const THW500Material = 1475.0;

// const THWN14Labor =
// const THWN12Labor =
// const THWN10Labor =
// const THWN8Labor =
// const THWN6Labor =
// const THWN4Labor =
// const THW3Labor =
// const THW2Labor =
// const THW1Labor =
// const THW1_0Labor =
// const THW2_0Labor =
// const THW3_0Labor =
// const THW4_0Labor =
// const THW250Labor=
// const THW300Labor=
// const THW350Labor =
// const THW400Labor=
// const THW500Labor =
const THWN14Labor = 75.5;
const THWN12Labor = 89.0;
const THWN10Labor = 98.0;
const THWN8Labor = 123.0;
const THWN6Labor = 151.0;
const THWN4Labor = 185.0;
const THW3Labor = 196.0;
const THW2Labor = 218.0;
const THW1Labor = 245.0;
const THW1_0Labor = 296.0;
const THW2_0Labor = 340.0;
const THW3_0Labor = 390.0;
const THW4_0Labor = 445.0;
const THW250Labor = 490.0;
const THW300Labor = 515.0;
const THW350Labor = 545.0;
const THW400Labor = 570.0;
const THW500Labor = 610.0;

app.get("/allData", (req, res) => {
  const NG30RMC = {
    AMPS: 30,
    conduitSize: '3/4"',
    materialConduit: RMCMaterial3_4,
    laborConduit: RMCLabor3_4,
    Sets: 1,
    Number: 4,
    wireSize: "#10",
    materialHot: THWN10Material,
    laborHot: THWN10Labor,
    groundSize: "#10",
    materialGND: THWN10Material,
    laborGND: THWN10Labor,
    materialTotal:
      1 * (RMCMaterial3_4 + (4 * THWN10Material) / 100 + THWN10Material / 100),
    laborTotal: 1 * (RMCLabor3_4 + (4 * THWN10Labor) / 100 + THWN10Labor / 100),
  };
  // const NG40RMC = { material: 7.0, labor: 15.05 };
  // const NG50RMC = { material: 7.0, labor: 15.05 };
  // const NG60RMC = { material: 10.25, labor: 16.35 };
  // const NG70RMC = { material: 10.25, labor: 16.35 };
  // const NG80RMC = { material: 11.7, labor: 17.8 };
  // const NG90RMC = { material: 11.7, labor: 17.8 };
  // const NG100RMC = { material: 14.75, labor: 21.5 };
  // const NG125RMC = { material: 14.75, labor: 21.5 };
  // const NG150RMC = { material: 14.75, labor: 21.5 };
  // const NG175RMC = { material: 14.75, labor: 21.5 };
  // const NG200RMC = { material: 29.0, labor: 28.0 };
  // const NG225RMC = { material: 29.0, labor: 28.0 };
  // const NG250RMC = { material: 32.5, labor: 39.0 };
  // const NG300RMC = { material: 32.5, labor: 39.0 };
  // const NG350RMC = { material: 44.0, labor: 49.0 };
  // const NG400RMC = { material: 44.0, labor: 49.0 };
  // const NG450RMC = { material: 29.0, labor: 28.0 };
  // const NG500RMC = { material: 32.5, labor: 39.0 };
  // const NG600RMC = { material: 32.5, labor: 39.0 };
  // const NG700RMC = { material: 44.0, labor: 49.0 };
  // const NG800RMC = { material: 32.5, labor: 39.0 };
  // const NG1000RMC = { material: 41.0, labor: 44.5 };
  // const NG1200RMC = { material: 32.5, labor: 39.0 };
  // const NG1600RMC = { material: 41.0, labor: 44.5 };
  // const NG2000RMC = { material: 44.0, labor: 49.0 };
  // const NG2500RMC = { material: 44.0, labor: 49.0 };
  // const NG3000RMC = { material: 44.0, labor: 49.0 };
  // const NG4000RMC = { material: 44.0, labor: 49.0 };

  res.json([
    { NG30RMC },
    // { NG50RMC },
    // { NG60RMC },
    // { RMC3_1_2 },
    // { RMC1_1_4 },
    // { RMC1_1_2 },
    // { RMC2 },
    // { RMC2_1_2 },
    // { RMC3 },
    // { RMC4 },
    // { EMT1_2 },
    // { EMT3_4 },
    // { EMT1 },
    // { EMT1_1_4 },
    // { EMT1_1_2 },
    // { EMT2 },
    // { EMT2_1_2 },
    // { EMT3 },
    // { EMT3_1_2 },
    // { EMT4 },
    // { THWN14 },
    // { THWN12 },
    // { THWN10 },
    // { THWN8 },
    // { THWN6 },
    // { THWN4 },
    // { THW3 },
    // { THW2 },
    // { THW1 },
    // { THW1_0 },
    // { THW2_0 },
    // { THW3_0 },
    // { THW4_0 },
    // { THW250 },
    // { THW300 },
    // { THW350 },
    // { THW400 },
    // { THW500 },
  ]);
});
// app.get("/allData", (req, res) => {
//   const RMC1_2 = { material: 4.27, labor: 10.9 };
//   const RMC3_4 = { material: 4.62, labor: 12.25 };
//   const RMC1 = { material: 7.0, labor: 15.05 };
//   const RMC1_1_4 = { material: 10.25, labor: 16.35 };
//   const RMC1_1_2 = { material: 11.7, labor: 17.8 };
//   const RMC2 = { material: 14.75, labor: 21.5 };
//   const RMC2_1_2 = { material: 29.0, labor: 28.0 };
//   const RMC3 = { material: 32.5, labor: 39.0 };
//   const RMC3_1_2 = { material: 41.0, labor: 44.5 };
//   const RMC4 = { material: 44.0, labor: 49.0 };
//   const EMT1_2 = { material: 1.19, labor: 5.75 };
//   const EMT3_4 = { material: 1.85, labor: 7.5 };
//   const EMT1 = { material: 3.13, labor: 8.5 };
//   const EMT1_1_4 = { material: 5.15, labor: 9.8 };
//   const EMT1_1_2 = { material: 6.45, labor: 10.9 };
//   const EMT2 = { material: 7.9, labor: 12.25 };
//   const EMT2_1_2 = { material: 10.4, labor: 16.35 };
//   const EMT3 = { material: 13.1, labor: 19.6 };
//   const EMT3_1_2 = { material: 16.85, labor: 21.5 };
//   const EMT4 = { material: 17.75, labor: 24.5 };
//   const THWN14 = { material: 12.9, labor: 75.5 };
//   const THWN12 = { material: 52.0, labor: 89.0 };
//   const THWN10 = { material: 29.5, labor: 98.0 };
//   const THWN8 = { material: 60.0, labor: 123.0 };
//   const THWN6 = { material: 93.5, labor: 151.0 };
//   const THWN4 = { material: 147.0, labor: 185.0 };
//   const THW3 = { material: 163.0, labor: 196.0 };
//   const THW2 = { material: 216.0, labor: 218.0 };
//   const THW1 = { material: 238.0, labor: 245.0 };
//   const THW1_0 = { material: 287.0, labor: 296.0 };
//   const THW2_0 = { material: 395.0, labor: 340.0 };
//   const THW3_0 = { material: 475.0, labor: 390.0 };
//   const THW4_0 = { material: 535.0, labor: 445.0 };
//   const THW250 = { material: 690.0, labor: 490.0 };
//   const THW300 = { material: 900.0, labor: 515.0 };
//   const THW350 = { material: 1050.0, labor: 545.0 };
//   const THW400 = { material: 1175.0, labor: 570.0 };
//   const THW500 = { material: 1475.0, labor: 610.0 };

//   res.json([
//     { RMC1_2 },
//     { RMC3_4 },
//     { RMC1 },
//     { RMC3_1_2 },
//     { RMC1_1_4 },
//     { RMC1_1_2 },
//     { RMC2 },
//     { RMC2_1_2 },
//     { RMC3 },
//     { RMC4 },
//     { EMT1_2 },
//     { EMT3_4 },
//     { EMT1 },
//     { EMT1_1_4 },
//     { EMT1_1_2 },
//     { EMT2 },
//     { EMT2_1_2 },
//     { EMT3 },
//     { EMT3_1_2 },
//     { EMT4 },
//     { THWN14 },
//     { THWN12 },
//     { THWN10 },
//     { THWN8 },
//     { THWN6 },
//     { THWN4 },
//     { THW3 },
//     { THW2 },
//     { THW1 },
//     { THW1_0 },
//     { THW2_0 },
//     { THW3_0 },
//     { THW4_0 },
//     { THW250 },
//     { THW300 },
//     { THW350 },
//     { THW400 },
//     { THW500 },
//   ]);
// });

app.get("/RMC", (req, res) => {
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

  res.json([
    { RMC1_2 },
    { RMC3_4 },
    { RMC1 },
    { RMC3_1_2 },
    { RMC1_1_4 },
    { RMC1_1_2 },
    { RMC2 },
    { RMC2_1_2 },
    { RMC3 },
    { RMC4 },
  ]);
});

app.get("/EMT", (req, res) => {
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

  res.json([
    { EMT1_2 },
    { EMT3_4 },
    { EMT1 },
    { EMT1_1_4 },
    { EMT1_1_2 },
    { EMT2 },
    { EMT2_1_2 },
    { EMT3 },
    { EMT3_1_2 },
    { EMT4 },
  ]);
});

app.get("/wires", (req, res) => {
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

  res.json([
    { THWN14 },
    { THWN12 },
    { THWN10 },
    { THWN8 },
    { THWN6 },
    { THWN4 },
    { THW3 },
    { THW2 },
    { THW1 },
    { THW1_0 },
    { THW2_0 },
    { THW3_0 },
    { THW4_0 },
    { THW250 },
    { THW300 },
    { THW350 },
    { THW400 },
    { THW500 },
  ]);
});

app.get("/RMC1_2", (req, res) => {
  const RMC1_2 = { material: 4.27, labor: 10.9 };

  res.json([
    {
      RMC1_2,
    },
  ]);
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
