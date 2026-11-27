import bcrypt from "bcryptjs";

const password = "password123";

// const fun = async () => {
//   const hashedPassword = await bcrypt.hash(password, 12);
//   console.log(hashedPassword);
// }

// fun();


const fun1 = async() => {
  const hashedPassword = await bcrypt.hash(password, 16);

  const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
  console.log(isPasswordCorrect);

  console.log(hashedPassword);
  console.log(password);
  
}

fun1();
