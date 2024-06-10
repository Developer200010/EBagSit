const bcrypt = require("bcrypt");

const encryption = (password) => {
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return err;
    else {
      bcrypt.hash(password, salt, function (err, hash) {
        return hash;
      });
    }
  });
};

module.exports.encryption = encryption;
