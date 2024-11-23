import mongoose from "mongoose";

const dbConnect = async (DB_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "test",
    };

    await mongoose.connect(DB_URL, DB_OPTIONS);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
