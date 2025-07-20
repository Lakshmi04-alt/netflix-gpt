export const checkValidData = (email, password,) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // ✅ Only validate name if it’s passed (i.e., during Sign Up)
//   let isNameValid = true;
//   if (name !== null && name !== undefined) {
//     isNameValid = /^[a-zA-Z\s.'-]{2,50}$/.test(name.trim());
//   }

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
//   if (!isNameValid) return "Name is not valid";

  return null;
};
