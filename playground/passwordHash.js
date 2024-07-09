const bcrypt = require("bcryptjs");

async function passwordChecking() {
  const password = "12312";
  const hashPassword = await bcrypt.hash(password, 8);

  console.log("password", password);
  console.log("hashPassword", hashPassword);

  const isPasswordMatch = await bcrypt.compare(password, hashPassword);

  if (!isPasswordMatch) {
    return console.log("password not matched");
  }
  return console.log("password matched");
}

passwordChecking();
