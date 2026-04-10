const User = require("../models/User.model");

class UserRepository {
  async findByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  async createUser(name, email, password) {
    const newUser = await new User.create({
      name,
      email,
      password,
    });
    return newUser;
  }

  async gameLibraryAdd(userId, gameId) {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { library: gameId } },
      { new: true },
    );
    return updatedUser;
  }

  async findById(userId){
    const user = await User.findById(userId);
    return user;
  }

}
module.exports = new UserRepository();
