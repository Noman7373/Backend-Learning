import mongoose from "mongoose";

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

const userModel = mongoose.model("user", userSchema);

const createDocuments = async () => {
  try {
    const createUserData = new userModel({
      name: "Ali",
      age: 22,
      fees: 5600.55,
      hobbies: ["Gardning", "Painting"],
      isActive: false,
      comments: [
        {
          value: "Im learning Backend Dev",
        },
      ],
    });

    const userSave = await createUserData.save();
    console.log(userSave);
  } catch (error) {}
};

//  Retrive user Data
const getAllData = async () => {
  const result = await userModel.find();
  result.forEach((items) => {
    console.log(items.name);
  });
  //   console.log(result);
};
export { getAllData };
