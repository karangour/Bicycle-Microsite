require("dotenv").config();
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const analyticsRoutes = require("./routes/openai");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use("/api", analyticsRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/dist", "index.html"))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running on port ", PORT));
