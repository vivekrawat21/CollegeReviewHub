const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  UserName: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
