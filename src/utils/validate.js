export const checkValidData = (name, email, password, isSignInForm) => {
  let isNameValid = true;
  if (!isSignInForm) {
    isNameValid = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);
  }
  const isEmailValid =
    /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  if (!isNameValid) return "Please Enter a valid Name";
  if (!isEmailValid) return "Please Enter a valid Email address";
  if (!isPasswordValid) return "Please Enter a valid Password";
  else return null;
};
