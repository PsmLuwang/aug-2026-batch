import UserModel from "../models/user.model.js";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isUserAlreadyExist = await UserModel.findOne({ email });
    if (isUserAlreadyExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      })
    }

    const user = await UserModel.create({
      name,
      email,
      password
    })

    res.status(200).json({ 
      success: true, 
      message: "Sign up completed!", 
      user 
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Server Error" })
  }
}

const signupVerification = (req, res) => {
  res.status(200).json({ success: true, message: "Account verified!" })
}

const login = (req, res) => {
  res.status(200).json({ success: true, message: "Login successful" })
}

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true, 
      message: "All users", 
      users
    })

  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Server Error" })
  }
}


export { signup, signupVerification, login, getAllUsers }