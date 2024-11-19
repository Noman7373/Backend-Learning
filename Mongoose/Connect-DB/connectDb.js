import mongoose from "mongoose";

const connectDB = async (URL) => {
  try {
    // await mongoose.connect(URL);
    //  with auth
    const DB_OPTIONS = {
      user: "Noman Ahmed",
      pass: "12345678",
      dbName: "students",
      authSource: "students", // database name
    };

    await mongoose.connect(URL, DB_OPTIONS);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
