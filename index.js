const {  connectDB, app , PORT} = require("./connection")
const path = require("path");
const router = require("./routes/index");
const express = require("express");

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

app.use(express.urlencoded({ extended: true }));


app.use("/" , router)

connectDB("mongodb://localhost:27017/companies")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

  

  
