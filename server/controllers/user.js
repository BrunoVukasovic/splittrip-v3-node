const User = require("../models/User");

const userController = {
  deleteUserByEmail: (req, res) => {
    const { Id } = req.user;
    User.destroy({
      where: {
        Id
      }
    });
  }
};

module.exports = userController;
