import mongoose from "mongoose";

const dataBaseConnection = async (URL) => {
  try {
    const URL_OPTIONS = {
      dbName: "test",
    };

    await mongoose.connect(URL, URL_OPTIONS);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export default dataBaseConnection;
