import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, requried: true, trim: true },
  email: { type: String, requried: true, trim: true, unique: true },
  password: { type: String, requried: true, trim: true },
  join: { type: Date, default: Date.now },
});

// compiling schema
const userModel = mongoose.model("user", userSchema);

export default userModel;
