require("dotenv").config();
console.log("✅ MongoDB Connected");
console.log(`🚀 Server running on port ${process.env.PORT}`);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const leadRoutes = require("./routes/leadRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/leads", leadRoutes);
app.get("/", (req, res) => {
  res.send("Backend Running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });