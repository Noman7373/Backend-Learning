import userModel from "../models/userSchema.js";
class UserController {
  static homePage = (req, res) => {
    res.render("index", { title: "Home" });
  };
  static userRegistration = (req, res) => {
    res.render("register", { title: "Sign Up" });
  };
  static logInUser = (req, res) => {
    res.render("signin", { title: "Sign In" });
  };
  static forgotPassword = (req, res) => {
    res.render("forgotPassword", { title: "Forgot-Password" });
  };
}

export default UserController;
