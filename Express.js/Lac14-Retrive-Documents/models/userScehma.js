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
    // console.log(userSave);
  } catch (error) {}
};

//  Retrive user All Data
// const getAllData = async () => {
//     // to get All Data
//   const result = await userModel.find();
//   result.forEach((items) => {
//     console.log(
//       items.name,
//       items.age,
//       items.fees.toString(),
//       items.hobbies[0],
//       items.hobbies[1],
//       items.isActive,
//       items.comments[0].value,
//       items.comments[0].publish.toLocaleDateString()
//     );
//   });

// };

//   ========================================   get single Userdata   ====================================
const getAllData = async () => {
  //   ========================================   get single Userdata   ====================================
  //   const result = await userModel.findById("123455", "name age");
  //   ==================================   Include  =====================================
  //   const userNameAge1 = await userModel.find().select("name age");        // method 1  include
  //   const userNameAge1 = await userModel.find().select(["name", "age"]); // method 2   include
  //   const userNameAge3 = await userModel.find().select({ name: 1, age: 1 }); // method 3  include
  //   ==================================   Exclude  =====================================
  //   const userNameAge4 = await userModel.find().select("-name -age"); // method 1 exclude
  //   const userNameAge5 = await userModel.find().select([ '-name', '-age' ]); // method 2 exclude
  //   const userNameAge6 = await userModel.find().select({ name: 0, age: 0 }); //  method 2 exclude
  //   ================   getData with limit() , skip() , count() ,sorting()  =========================
  //   const getLimitData = await userModel.find().limit(1);
  //   const getLimitData1 = await userModel.find().limit(1);
  //   const getLimitData2 = await userModel.find().skip(1);
  //   const getLimitData3 = await userModel.find().countDocuments();
  //   const getLimitData4 = await userModel.find().sort({ age: 1 });
  //   const getLimitData5 = await userModel.find().sort({ age: -1 });
  //   console.log(getLimitData5);
  //   ================   Comparison Operator  ($eq , $ne, $gt , $gte , $lt, $lte , $in , $nin) =========================

  //   const data1 = await userModel.find({ age: { $eq: 24 } });
  //   const data2 = await userModel.find({ age: { $nt: 24 } });
  //   const data3 = await userModel.find({ age: { $gt: 24 } });
  //   const data4 = await userModel.find({ age: { $gte: 24 } });
  //   const data5 = await userModel.find({ age: { $lt: 24 } });
  //   const data6 = await userModel.find({ age: { $lte: 24 } });
  //   const data7 = await userModel.find({ age: { $in: [22, 25] } });
  //   const data8 = await userModel.find({ age: { $nin: [22, 25] } }); // not in
  //   console.log(data8);

  //   ===================      Logical Operator  ($and()  ,  $or() )   ==================================
  //   const logical1 = await userModel.find({$and: [{ name: "Nomi Khan" }, { age: 25 }]});   // $and both field should exits
//   const logical2 = await userModel.find({$or: [{ name: "Nomi Khan" }, { age: 25 }]}); // $or at least one field should exits
  const logical3 = await userModel.find({$or: [{ name: "Nomi Khan" }, { age: 25 }]}); // $or at least one field should exits
  console.log(logical3);
};
export { getAllData };
