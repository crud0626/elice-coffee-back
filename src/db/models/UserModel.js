const { model } = require("mongoose");
const UserSchema = require("../schemas/UserSchema");

const User = model("users", UserSchema);

class UserModel {
  async findById(id) {
    return await User.findOne({ id });
  }
  async findByEmail(email) {
    return await User.findOne({ email });
  }
}

const userModel = new UserModel();

module.exports = {
  UserModel,
  userModel,
};
