const signup = (req, res) => {
  const { name, email, password } = req.body;
  const { num } = req.params;
  const { page, limit } = req.query;
  // create user into database

  const newUser = {
    num,
    page,
    limit,
    id: "123",
    name,
    email,
    password
  }

  res.status(200).json({ success: true, message: "Sign up completed!", user: newUser })
}

const signupVerification = (req, res) => {
  res.status(200).json({ success: true, message: "Account verified!" })
}

const login = (req, res) => {
  res.status(200).json({ success: true, message: "Login successful" })
}


export { signup, signupVerification, login }