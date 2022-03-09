const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  login_method: {
    type: String,
    required: true,
    default: "email",
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
