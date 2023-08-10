const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect("mongodb://localhost:27017/avalon");
    console.log("Database Connected Sucessfully");
  } catch (error) {
    console.log("Database error");
  }
};

module.exports = dbConnect;
