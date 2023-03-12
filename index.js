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
// const THW600Material =
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
const THW600Material = 1800.0;

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
// const THW600Labor =
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
const THW600Labor = 650.0;

app.get("/allData", (req, res) => {
  const NG30RMC = {
    AMPS: 30,
    conduitSize: '3/4"',
    materialConduit: RMCMaterial3_4,
    laborConduit: RMCLabor3_4,
    sets: 1,
    number: 4,
    hotSize: "#10",
    materialHot: THWN10Material,
    laborHot: THWN10Labor,
    GNDSize: "#10",
    materialGND: THWN10Material,
    laborGND: THWN10Labor,
  };
  const NG40RMC = {
    AMPS: 40,
    conduitSize: '1"',
    materialConduit: RMCMaterial1,
    laborConduit: RMCLabor1,
    sets: 1,
    number: 4,
    hotSize: "#8",
    materialHot: THWN8Material,
    laborHot: THWN8Labor,
    GNDSize: "#10",
    materialGND: THWN10Material,
    laborGND: THWN10Labor,
  };
  const NG50RMC = {
    AMPS: 50,
    conduitSize: '1"',
    materialConduit: RMCMaterial1,
    laborConduit: RMCLabor1,
    sets: 1,
    number: 4,
    hotSize: "#6",
    materialHot: THWN6Material,
    laborHot: THWN10Labor,
    GNDSize: "#10",
    materialGND: THWN10Material,
    laborGND: THWN10Labor,
  };
  const NG60RMC = {
    AMPS: 60,
    conduitSize: '1-1/4"',
    materialConduit: RMCMaterial1_1_4,
    laborConduit: RMCLabor1_1_4,
    sets: 1,
    number: 4,
    hotSize: "#4",
    materialHot: THWN4Material,
    laborHot: THWN4Labor,
    GNDSize: "#10",
    materialGND: THWN10Material,
    laborGND: THWN10Labor,
  };
  const NG70RMC = {
    AMPS: 70,
    conduitSize: '1-1/4"',
    materialConduit: RMCMaterial1_1_4,
    laborConduit: RMCLabor1_1_4,
    sets: 1,
    number: 4,
    hotSize: "#4",
    materialHot: THWN4Material,
    laborHot: THWN4Labor,
    GNDSize: "#8",
    materialGND: THWN8Material,
    laborGND: THWN8Labor,
  };
  const NG80RMC = {
    AMPS: 80,
    conduitSize: '1-1/2"',
    materialConduit: RMCMaterial1_1_2,
    laborConduit: RMCLabor1_1_2,
    sets: 1,
    number: 4,
    hotSize: "#2",
    materialHot: THW2Material,
    laborHot: THW2Labor,
    GNDSize: "#8",
    materialGND: THWN8Material,
    laborGND: THWN8Labor,
  };
  const NG90RMC = {
    AMPS: 90,
    conduitSize: '1-1/2"',
    materialConduit: RMCMaterial1_1_2,
    laborConduit: RMCLabor1_1_2,
    sets: 1,
    number: 4,
    hotSize: "#2",
    materialHot: THW2Material,
    laborHot: THW2Labor,
    GNDSize: "#8",
    materialGND: THWN8Material,
    laborGND: THWN8Labor,
  };
  const NG100RMC = {
    AMPS: 100,
    conduitSize: '2"',
    materialConduit: RMCMaterial2,
    laborConduit: RMCLabor2,
    sets: 1,
    number: 4,
    hotSize: "#1",
    materialHot: THW1Material,
    laborHot: THW1Labor,
    GNDSize: "#8",
    materialGND: THWN8Material,
    laborGND: THWN8Labor,
  };
  const NG125RMC = {
    AMPS: 125,
    conduitSize: '2"',
    materialConduit: RMCMaterial2,
    laborConduit: RMCLabor2,
    sets: 1,
    number: 4,
    hotSize: "#1",
    materialHot: THW1Material,
    laborHot: THW1Labor,
    GNDSize: "#6",
    materialGND: THWN6Material,
    laborGND: THWN6Labor,
  };
  const NG150RMC = {
    AMPS: 150,
    conduitSize: '2"',
    materialConduit: RMCMaterial2,
    laborConduit: RMCLabor2,
    sets: 1,
    number: 4,
    hotSize: "1/0",
    materialHot: THW1_0Material,
    laborHot: THW1_0Labor,
    GNDSize: "#6",
    materialGND: THWN6Material,
    laborGND: THWN6Labor,
  };
  const NG175RMC = {
    AMPS: 175,
    conduitSize: '2"',
    materialConduit: RMCMaterial2,
    laborConduit: RMCLabor2,
    sets: 1,
    number: 4,
    hotSize: "2/0",
    materialHot: THW2_0Material,
    laborHot: THW2_0Labor,
    GNDSize: "#6",
    materialGND: THWN6Material,
    laborGND: THWN6Labor,
  };
  const NG200RMC = {
    AMPS: 200,
    conduitSize: '2-1/2"',
    materialConduit: RMCMaterial2_1_2,
    laborConduit: RMCLabor2_1_2,
    sets: 1,
    number: 4,
    hotSize: "3/0",
    materialHot: THW3_0Material,
    laborHot: THW3_0Labor,
    GNDSize: "#6",
    materialGND: THWN6Material,
    laborGND: THWN6Labor,
  };
  const NG225RMC = {
    AMPS: 225,
    conduitSize: '2-1/2"',
    materialConduit: RMCMaterial2_1_2,
    laborConduit: RMCLabor2_1_2,
    sets: 1,
    number: 4,
    hotSize: "4/0",
    materialHot: THW4_0Material,
    laborHot: THW4_0Labor,
    GNDSize: "#4",
    materialGND: THWN4Material,
    laborGND: THWN4Labor,
  };
  const NG250RMC = {
    AMPS: 250,
    conduitSize: '3"',
    materialConduit: RMCMaterial3,
    laborConduit: RMCLabor3,
    sets: 1,
    number: 4,
    hotSize: "250KCMIL",
    materialHot: THW250Material,
    laborHot: THW250Labor,
    GNDSize: "#4",
    materialGND: THWN4Material,
    laborGND: THWN4Labor,
  };
  const NG300RMC = {
    AMPS: 300,
    conduitSize: '3"',
    materialConduit: RMCMaterial3,
    laborConduit: RMCLabor3,
    sets: 1,
    number: 4,
    hotSize: "350KCMIL",
    materialHot: THW350Material,
    laborHot: THW350Labor,
    GNDSize: "#4",
    materialGND: THWN4Material,
    laborGND: THWN4Labor,
  };
  const NG350RMC = {
    AMPS: 350,
    conduitSize: '4"',
    materialConduit: RMCMaterial4,
    laborConduit: RMCLabor4,
    sets: 1,
    number: 4,
    hotSize: "500KCMIL",
    materialHot: THW500Material,
    laborHot: THW500Labor,
    GNDSize: "#3",
    materialGND: THW3Material,
    laborGND: THW3Labor,
  };
  const NG400RMC = {
    AMPS: 400,
    conduitSize: '4"',
    materialConduit: RMCMaterial4,
    laborConduit: RMCLabor4,
    sets: 1,
    number: 4,
    hotSize: "600KCMIL",
    materialHot: THW600Material,
    laborHot: THW600Labor,
    GNDSize: "#3",
    materialGND: THW3Material,
    laborGND: THW3Labor,
  };
  const NG450RMC = {
    AMPS: 450,
    conduitSize: '2-1/2"',
    materialConduit: RMCMaterial2_1_2,
    laborConduit: RMCLabor2_1_2,
    sets: 2,
    number: 4,
    hotSize: "4/0",
    materialHot: THW4_0Material,
    laborHot: THW4_0Labor,
    GNDSize: "#2",
    materialGND: THW2Material,
    laborGND: THW2Labor,
  };
  const NG500RMC = {
    AMPS: 500,
    conduitSize: '3"',
    materialConduit: RMCMaterial3,
    laborConduit: RMCLabor3,
    sets: 2,
    number: 4,
    hotSize: "250KCMIL",
    materialHot: THW250Material,
    laborHot: THW250Labor,
    GNDSize: "#2",
    materialGND: THW2Material,
    laborGND: THW2Labor,
  };
  const NG600RMC = {
    AMPS: 600,
    conduitSize: '3"',
    materialConduit: RMCMaterial3,
    laborConduit: RMCLabor3,
    sets: 2,
    number: 4,
    hotSize: "350KCMIL",
    materialHot: THW350Material,
    laborHot: THW350Labor,
    GNDSize: "#1",
    materialGND: THW1Material,
    laborGND: THW1Labor,
  };
  const NG700RMC = {
    AMPS: 700,
    conduitSize: '4"',
    materialConduit: RMCMaterial4,
    laborConduit: RMCLabor4,
    sets: 2,
    number: 4,
    hotSize: "500KCMIL",
    materialHot: THW500Material,
    laborHot: THW500Labor,
    GNDSize: "1/0",
    materialGND: THW1_0Material,
    laborGND: THW1_0Labor,
  };
  const NG800RMC = {
    AMPS: 800,
    conduitSize: '3"',
    materialConduit: RMCMaterial3,
    laborConduit: RMCLabor3,
    sets: 3,
    number: 4,
    hotSize: "300KCMIL",
    materialHot: THW300Material,
    laborHot: THW300Labor,
    GNDSize: "1/0",
    materialGND: THW1_0Material,
    laborGND: THW1_0Labor,
  };
  const NG1000RMC = {
    AMPS: 1000,
    conduitSize: '3-1/2"',
    materialConduit: RMCMaterial3_1_2,
    laborConduit: RMCLabor3_1_2,
    sets: 3,
    number: 4,
    hotSize: "400KCMIL",
    materialHot: THW400Material,
    laborHot: THW400Labor,
    GNDSize: "2/0",
    materialGND: THW2_0Material,
    laborGND: THW2_0Labor,
  };
  const NG1200RMC = {
    AMPS: 1200,
    conduitSize: '3"',
    materialConduit: RMCMaterial3,
    laborConduit: RMCLabor3,
    sets: 4,
    number: 4,
    hotSize: "350KCMIL",
    materialHot: THW350Material,
    laborHot: THW350Labor,
    GNDSize: "3/0",
    materialGND: THW3_0Material,
    laborGND: THW3_0Labor,
  };
  const NG1600RMC = {
    AMPS: 1600,
    conduitSize: '3-1/2"',
    materialConduit: RMCMaterial3_1_2,
    laborConduit: RMCLabor3_1_2,
    sets: 5,
    number: 4,
    hotSize: "400KCMIL",
    materialHot: THW400Material,
    laborHot: THW400Labor,
    GNDSize: "4/0",
    materialGND: THW4_0Material,
    laborGND: THW4_0Labor,
  };
  const NG2000RMC = {
    AMPS: 2000,
    conduitSize: '4"',
    materialConduit: RMCMaterial4,
    laborConduit: RMCLabor4,
    sets: 5,
    number: 4,
    hotSize: "600KCMIL",
    materialHot: THW600Material,
    laborHot: THW600Labor,
    GNDSize: "250KCMIL",
    materialGND: THW250Material,
    laborGND: THW250Labor,
  };
  const NG2500RMC = {
    AMPS: 2500,
    conduitSize: '4"',
    materialConduit: RMCMaterial4,
    laborConduit: RMCLabor4,
    sets: 6,
    number: 4,
    hotSize: "600KCMIL",
    materialHot: THW600Material,
    laborHot: THW600Labor,
    GNDSize: "350KCMIL",
    materialGND: THW350Material,
    laborGND: THW350Labor,
  };
  const NG3000RMC = {
    AMPS: 3000,
    conduitSize: '4"',
    materialConduit: RMCMaterial4,
    laborConduit: RMCLabor4,
    sets: 8,
    number: 4,
    hotSize: "600KCMIL",
    materialHot: THW600Material,
    laborHot: THW600Labor,
    GNDSize: "400KCMIL",
    materialGND: THW400Material,
    laborGND: THW400Labor,
  };
  const NG4000RMC = {
    AMPS: 4000,
    conduitSize: '4"',
    materialConduit: RMCMaterial4,
    laborConduit: RMCLabor4,
    sets: 10,
    number: 4,
    hotSize: "600KCMIL",
    materialHot: THW600Material,
    laborHot: THW600Labor,
    GNDSize: "500KCMIL",
    materialGND: THW500Material,
    laborGND: THW500Labor,
  };

  res.json([
    { NG30RMC },
    { NG50RMC },
    { NG60RMC },
    { NG70RMC },
    { NG80RMC },
    { NG90RMC },
    { NG100RMC },
    { NG125RMC },
    { NG150RMC },
    { NG175RMC },
    { NG200RMC },
    { NG225RMC },
    { NG250RMC },
    { NG300RMC },
    { NG350RMC },
    { NG400RMC },
    { NG450RMC },
    { NG500RMC },
    { NG600RMC },
    { NG700RMC },
    { NG800RMC },
    { NG1000RMC },
    { NG1200RMC },
    { NG1600RMC },
    { NG2000RMC },
    { NG2500RMC },
    { NG3000RMC },
    { NG4000RMC },
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
