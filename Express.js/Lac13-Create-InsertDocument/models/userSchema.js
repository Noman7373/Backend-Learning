import mongoose from "mongoose";

// Define Schemea
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5000.5,
    //last added custom validation
  },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

// path function to provide schema information
// console.log(userSchemea.path("age"));

// Compiling Schema
const userModel = mongoose.model("user", userSchema);

// Creating New Document

const createDocuments = async () => {
  try {
    // Creating New Document
    const userDoc = new userModel({
      name: "Nomi Khan",
      age: 23,
      fees: 6000.6,
      hobbies: ["Reading", "Writting"],
      isActive: true,
      comments: [
        {
          value: "Learning Express.js",
        },
      ],
    });
    // Saving Documents
    const result = await userDoc.save();
    console.log(result);
    console.log("Data stored success");
  } catch (error) {
    console.log(error);
  }
};

export default createDocuments;
