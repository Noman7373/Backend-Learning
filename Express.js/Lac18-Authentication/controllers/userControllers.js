import userModel from "../models/userSchema.js";
import bcrypt from "bcrypt";
class UserController {
  static homePage = (req, res) => {
    res.render("index", { title: "Home" });
  };

  static userRegistration = (req, res) => {
    res.render("register", { title: "Sign Up" });
  };

  // creating user
  static userDoc = async (req, res) => {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const userDocument = new userModel({
      name,
      email,
      password: hashPassword,
    });

    await userDocument.save();

    res.redirect("/login");
    try {
    } catch (error) {
      console.log(error);
    }
  };

  static logInUser = (req, res) => {
    res.render("signin", { title: "Sign In" });
  };

  static verifyLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const findUser = await userModel.findOne({ email });
      if (findUser != null) {
        const comparePassword = await bcrypt.compare(
          password,
          findUser.password
        );
        if (findUser.email === email && comparePassword) {
          res.redirect("/");
        } else {
          res.send("<h1>Email or password not valid</h1>");
        }
      } else {
        res.send("<h1>User not registered</h1>");
      }
    } catch (error) {
      console.log(error);
    }
  };
  static forgotPassword = (req, res) => {
    res.render("forgotPassword", { title: "Forgot-Password" });
  };
}

export default UserController;
