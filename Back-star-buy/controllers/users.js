const users = require("../database-mysql/models/users");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;

module.exports = {
  getAllUsers: function (req, res) {
    users.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  addUser: async function (req, res) {
    const { email, password, confirmPassword, username, image } = req.body;
    if (image) {
      if (!email || !password || !username || !confirmPassword) {
        res.status(500).send("fill all the field");
      } else {
        if (confirmPassword !== password) {
          res.status(500).send("please confirm your password");
        } else {
          users.getAllNames(username, async (err, result) => {
            if (err) {
              res.status(400).send(err);
            } else if (result.length > 0) {
              res.status(400).send("this user name exist");
            } else {
              users.getAllEmails(email, async (err, result) => {
                if (err) {
                  res.status(400).send(err);
                } else if (result.length > 0) {
                  res.status(400).send("this email name exist");
                } else {
                  try {
                    const response = await cloudinar.uploader.upload(
                      image,
                      async function (error, result) {
                        if (error) {
                          res.status(400).send(error);
                        } else {
                          const url = result.secure_url;
                          const salt = await bcrypt.genSalt();
                          const hashedPassword = await bcrypt.hash(
                            password,
                            salt
                          );
                          users.signup(
                            username,
                            email,
                            url,
                            hashedPassword,
                            async (err) => {
                              if (err) {
                                res.send(err);
                              } else {
                                res.send("signup successful");
                                return;
                              }
                            }
                          );
                        }
                      }
                    );
                  } catch {
                    res.status(500);
                  }
                }
              });
            }
          });
        }
      }
    } else {
      if (!email || !password || !username || !confirmPassword) {
        res.status(500).send("fill all the field");
      } else {
        if (confirmPassword != password) {
          res.status(500).send("please confirm your password");
        } else {
          users.getAllNames(username, async (err, result) => {
            if (err) {
              res.status(400).send(err);
            } else if (result.length > 0) {
              res.status(400).send("this user name exist");
            } else {
              users.getAllEmails(email, async (err, result) => {
                if (err) {
                  res.status(400).send(err);
                } else if (result.length > 0) {
                  res.status(400).send("this email name exist");
                } else {
                  try {
                    const salt = await bcrypt.genSalt();
                    const hashedPassword = await bcrypt.hash(password, salt);
                    users.signupWithoutimg(
                      username,
                      email,
                      hashedPassword,
                      async (err) => {
                        if (err) {
                          res.send(err);
                        } else {
                          res.send("signup successful");
                          return;
                        }
                      }
                    );
                  } catch {
                    res.status(500);
                  }
                }
              });
            }
          });
        }
      }
    }
  },
  loginUser: function (req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send("Please fill all the fields");
    } else {
      users.getAllEmails(email, (err, result) => {
        if (err) {
          return res.status(500).send(err);
        } else if (!result.length) {
          return res.status(500).send("user not found");
        } else {
          users.getPasswordByEmail(email, (err, result) => {
            if (err) {
              return res.status(500).send(err);
            } else if (!result.length) {
              return res.status(500).send("wrong password");
            } else if (result) {
              try {
                bcrypt.compare(
                  password,
                  result[0].password,
                  function (err, result) {
                    if (err) {
                      res.send(err);
                    }
                    if (result === false) {
                      res.send("login failed");
                    }
                    if (result === true) {
                      users.getRole(email, (err, result) => {
                        if (err) {
                          return res.send(err);
                        }
                        if (result.length) {
                          if (result[0].role === "admin") {
                            return res.send("hi admin ");
                          }
                          return res.send("login successful");
                        } else {
                          res.send("not found");
                        }
                      });
                    }
                  }
                );
              } catch (err) {
                res.send(err);
              }
            }
          });
        }
      });
    }
  },
  signupAdmin: async function (req, res) {
    const { email, password, confirmPassword, username, role } = req.body;
    if (!email || !password || !confirmPassword || !username || !role) {
      res.status(500).send("fill all the field");
    } else {
      if (confirmPassword != password) {
        return res.status(500).send("confirm your password");
      }
      users.getAllNames(username, async (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else if (result.length > 0) {
          return res.status(400).send("username already exist");
        } else {
          users.getAllEmails(email, async (err, result) => {
            if (err) {
              res.status(500).send(err);
            } else if (result.length > 0) {
              return res.status(400).send("email already exist");
            } else {
              const salt = await bcrypt.genSalt();
              const hashedPassword = await bcrypt.hash(password, salt);
              users.signupAdmin(
                username,
                email,
                hashedPassword,
                role,
                (err, result) => {
                  if (err) res.status(500).send(err);
                  else {
                    res.status(200).send("signup successfully ");
                  }
                }
              );
            }
          });
        }
      });
    }
  },
  getRole: function (req, res) {
    const email = req.body.email;
    users.getRole(email, (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!result.length) {
        res.send("not found");
      } else if (result[0].role === null) {
        res.send("user");
      } else {
        res.send(result[0].role);
      }
    });
  },
};
