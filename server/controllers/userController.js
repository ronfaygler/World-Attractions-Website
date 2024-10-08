const User = require("../models/UserModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// get a single user
const getSingleUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ mssg: "error getting user" });
  }
  try {
    const user = await User.findById(id);
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ mssg: "error getting user" });
  }
};

// create a new user
const createUser = async (req, res) => {
  const { userName, email, password, profilePicURL } = req.body;
  const salt = await bcrypt.genSalt(); //for password encryption
  const user_exists = await User.findOne({ email });
  if (user_exists) {
    res.status(400).json({ mssg: "user already exists" });
    return;
  }
  try {
    if (!user_exists) {
      const user = await User.create({
        userName,
        email,
        password: await bcrypt.hash(password, salt),
        profilePicURL,
      });
      res.status(200).json({ user });
    }
  } catch (err) {
    res.status(500).json({ err });
  }
};

// sign in with email and password
const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }); //find user by email
    if (user == null) {
      // user was not found
      return res.status(401).json({ mssg: "error finding user" });
    }

    if (await bcrypt.compare(password, user.password)) {
      // check if the password matches
      res
        .status(200)
        .json({ userName: user.userName, profilePic: user.profilePicURL });
    } else {
      return res.status(401).json({ mssg: "invalid password" });
    }
  } catch (err) {
    res.status(400).json({ mssg: "error logging in" });
  }
};

module.exports = {
  createUser,
  getSingleUser,
  signIn,
};
