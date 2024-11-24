import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, trim: true, requried: true },
  age: { type: Number, requried: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5000,
    //last added custom validation
  },
  hobbies: { type: Array },
  isActive: {
    type: Boolean,
  },

  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("users", userSchema);

const createDocuments = async () => {
  try {
    const userInformation = new userModel({
      name: "Haji Iqbal",
      age: 45,
      fees: 5600.5,
      hobbies: ["Reading", "Gardening", "Waliking"],
      isActive: false,
      comments: [
        {
          value: "Im Right Arm fast bowler",
        },
      ],
    });

    const saveUser = await userInformation.save();
    console.log(saveUser);
  } catch (error) {
    console.log(error);
  }
};

//   UpdateDocuments
// Each model has its own update method for modifying documents in he databse without returning them application

// findByIdAndUpdate()
const updateDocumenst = async (id) => {
  try {
    // must change with id
    const updateUser = await userModel.findByIdAndUpdate(
      id,
      {
        name: "Haji Muhammad Iqbal",
      },
      { returnDocument: "after" }
    );
  } catch (error) {
    console.log(error);
  }
};

// update One
const updateDocumenstOne = async (id) => {
  try {
    const updateUserOne = await userModel.updateOne(
      { _id: id },
      { name: "Noman Ahmed" }
    );
  } catch (error) {
    console.log(error);
  }
};

// update more then one
const updateManyDocuments = async () => {
  try {
    const updateManyUsers = await userModel.updateMany(
      { isActive: false },
      { isActive: true }
    );
  } catch (error) {
    console.log(error);
  }
};


// Delete Documents
const deleteDocumentOne = async () => {
  try {
    await userModel.deleteOne({ name: "Noman Ahmed" });
  } catch (error) {
    console.log(error);
  }
};

export {
  updateDocumenst,
  updateDocumenstOne,
  updateManyDocuments,
  deleteDocumentOne,
};
