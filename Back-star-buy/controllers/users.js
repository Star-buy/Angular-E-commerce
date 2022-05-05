const users = require("../database-mysql/models/users");
const bcrypt = require("bcrypt");
const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  getOneUser: function (req, res) {
    const { email } = req.body;
    users.getAll(email, (err, results) => {
      if (err) res.send(err);
      else res.json(results);
    });
  },
  signupUser: async function (req, res) {
    const { email, password, confirmPassword, username, image } = req.body;
    if (image) {
      if (!email || !password || !username || !confirmPassword) {
        res.send("fill all the field");
      } else {
        if (confirmPassword !== password) {
          res.send("please confirm your password");
        } else {
          users.getAllNames(username, async (err, result) => {
            if (err) {
              res.send(err);
            } else if (result.length > 0) {
              res.send("this user name exist");
            } else {
              users.getAllEmails(email, async (err, result) => {
                if (err) {
                  res.send(err);
                } else if (result.length > 0) {
                  res.send("this email exist");
                } else {
                  try {
                    const response = await cloudinar.uploader.upload(
                      image,
                      async function (error, result) {
                        if (error) {
                          res.send(error);
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
                    res.send("somthing went wrong");
                  }
                }
              });
            }
          });
        }
      }
    } else {
      if (!email || !password || !username || !confirmPassword) {
        res.send("fill all the field");
      } else {
        if (confirmPassword != password) {
          res.send("please confirm your password");
        } else {
          users.getAllNames(username, async (err, result) => {
            if (err) {
              res.send(err);
            } else if (result.length > 0) {
              res.send("this user name exist");
            } else {
              users.getAllEmails(email, async (err, result) => {
                if (err) {
                  res.send(err);
                } else if (result.length > 0) {
                  res.send("this email name exist");
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
                    res.send("something went wrong");
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
      return res.send("Please fill all the fields");
    } else {
      users.getAllEmails(email, (err, result) => {
        if (err) {
          return res.send(err);
        } else if (!result.length) {
          return res.send("user not found");
        } else {
          users.getPasswordByEmail(email, (err, result) => {
            if (err) {
              return res.send(err);
            } else if (!result.length) {
              return res.send("wrong password");
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
                      res.send({message:"login failed"});
                    }
                    if (result === true) {
                      users.getRole(email, (err, result) => {
                        if (err) {
                          return res.send(err);
                        }
                        if (result.length) {
                          if (result[0].role === "admin") {
                            const user = {
                              id: result[0].id,
                              name: result[0].username,
                              email: result[0].email,
                              role: result[0].role
                            };
                            jwt.sign(
                              { user },
                              process.env.JWT_SECRET_KEY,
                              (err, token) => {
                                if (err) {
                                  return res.send(err);
                                }
                                res.send(token);
                              }
                            );
                          } else if (result[0].role === null) {
                            //return res.send("login successful");
                            users.getAll(email, (err, result) => {
                              if (err) {
                                return res.send(err);
                              } else {
                                const user = {
                                  id: result[0].id,
                                  name: result[0].username,
                                  email: result[0].email,
                                  image: result[0].image,
                                  role: result[0].role
                                };
                                jwt.sign(
                                  { user },
                                  process.env.JWT_SECRET_KEY,
                                  (err, token) => {
                                    if (err) {
                                      return res.send(err);
                                    }
                                    res.send(token);
                                  }
                                );
                              }
                            });
                          }
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
      res.send("fill all the field");
    } else {
      if (confirmPassword != password) {
        return res.send("confirm your password");
      }
      users.getAllNames(username, async (err, result) => {
        if (err) {
          res.send(err);
        } else if (result.length > 0) {
          return res.send("username already exist");
        } else {
          users.getAllEmails(email, async (err, result) => {
            if (err) {
              res.send(err);
            } else if (result.length > 0) {
              return res.send("email already exist");
            } else {
              const salt = await bcrypt.genSalt();
              const hashedPassword = await bcrypt.hash(password, salt);
              users.signupAdmin(
                username,
                email,
                hashedPassword,
                role,
                (err, result) => {
                  if (err) res.send(err);
                  else {
                    const user = {
                      id: result[0].id,
                      name: result[0].username,
                      email: result[0].email,
                      role: result[0].role
                    };
                    jwt.sign(
                      { user },
                      process.env.JWT_SECRET_KEY,
                      (err, token) => {
                        if (err) {
                          return res.send(err);
                        }
                        res.send(token);
                      }
                    );
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
        res.send(err);
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
