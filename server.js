// import express from "express";

// import dotenv from "dotenv";




// import cors from "cors";

// //configure env
// dotenv.config();

// //databse config

// //rest object
// const app = express();

// //middelwares
// app.use(cors());
// app.use(express.json());


// //routes
// // 


// //rest api
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome </h1>");
// });

// //PORT
// const PORT = process.env.PORT || 8080;

// //run listen
// app.listen(PORT, () => {
//   console.log(
//     `SERVER IS RUNNING  ON ${PORT}`
//   );
// });
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

//dotenv configuartion
dotenv.config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(express.json());

 app.get("/", (req, res) => {
   res.send("<h1>Welcome </h1>");
 });

// //routes
 app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

//port
const PORT = process.env.PORT || 8000

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});