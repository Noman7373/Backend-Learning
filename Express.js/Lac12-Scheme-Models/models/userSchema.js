import mongoose from "mongoose";

// Define Schemea
const userSchemea = new mongoose.Schema({
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
console.log(userSchemea.path("age"));


// Compiling Schema
const userModel = mongoose.model("user", userSchemea);
