const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("DB connection successfull");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
