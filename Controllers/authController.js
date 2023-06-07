let jwt = require("jsonwebtoken");
require("dotenv");

login = async (req, res) => {
  let userDetails = { username: "Ifeoluwa", password: "123456" };
  // console.log(userDetails.password);
  console.log(req.params);

  // let isLogin =
  if (userDetails.password === req.params.password) {
    console.log(req.params.password);
    jwt.sign(userDetails, "process.env.secretKey", (err, data) => {
      if (err) {
        res.json("error");
      }
      return res.json({ token: data, msg: `Welcome ${userDetails.username}` });
    });
  } else {
    return res.json({ msg: "Invalid Password" });
  }
};

module.exports = login;
