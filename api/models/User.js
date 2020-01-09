import mongoose from "./init";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, index: true }
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
  usernameLowerCase: true,
  session: false
});

const User = mongoose.model("User", userSchema);

export default User;
