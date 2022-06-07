const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/Longue404");
    console.log("BD Connected");
  } catch (error) {
    console.log("DB Connected Error !");
  }
}
exports.connectDB = connectDB;
