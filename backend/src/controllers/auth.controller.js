const userModel = require("../models/user.model");
const { createSecretToken } = require("../utils/secretToken");
const bcrypt = require("bcrypt");

module.exports.singup = async (req, res) => {
  try {
    console.log("endpoint hit");
    const { username, email, password } = req.body;
    if (!email || !password || !email) {
      return res
        .status(400)
        .json({ success: false, message: "Email and Password and Required" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      console.log("user is already exits");
      return res
        .status(400)
        .json({ success: false, message: "User is already Exists" });
    }
    const newUser = await new userModel({
      email,
      password,
      username,
    });
    newUser.save();

    const token = createSecretToken(newUser._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res
      .status(201)
      .json({ success: true, message: "User Register successfully" });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({
      message: "An error occurred during signup",
      error: err.message,
    });
  }
};

module.exports.login = async (req, res) => {
  console.log("endpoint hit");
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    const isPsswordValid = await bcrypt.compare(password, user.password);
    if (!isPsswordValid) {
      console.log("invalid email or password");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({
      message: "An error occurred during signup",
      error: err.message,
    });
  }
};

module.exports.logout = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      path: "/",
    });
     console.log("lkajdfl")
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(500).json({
      message: "An error occurred during signup",
      error: err.message,
    });
  }
};
