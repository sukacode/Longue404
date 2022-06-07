const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Longue404");
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connected Error !");
  }
};
module.exports = connectDB;
