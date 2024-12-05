require("dotenv").config();


const express = require("express");
const bodyParser = require("body-parser");
const analyticsRoutes = require("./routes/openai");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use("/api", analyticsRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("Server running on port ", PORT));
