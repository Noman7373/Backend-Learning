import mongoose from "mongoose";

const dbConection = async (DB_URL) => {
  try {
    const DB_Option = {
      dbName: "test",
    };

    await mongoose.connect(DB_URL, DB_Option);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dbConection;
