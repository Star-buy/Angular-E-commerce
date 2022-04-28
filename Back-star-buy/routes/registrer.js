const {
  getAllNames,
  getAllEmails,
  signup,
  getPasswordByEmail,
  getUserName,
} = require("../database-mysql/index");

const router = require("express").Router();
const bcrypt = require("bcrypt");

const cloudinary = require("../utils/cloudinary");
var cloudinar = require('cloudinary');
var cloudinar = require('cloudinary').v2;


router.get("/get", (req, res) => {
  get((err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

router.post("/signup", async (req, res) => {
  const { username, email } = req.body;
  getAllNames(username, async (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      res.send("username exist");
    } else {
      getAllEmails(email, async (err, result) => {
        if (err) {
          res.send(err);
        }
        if (result.length > 0) {
          res.send("email exist");
        } else {
          try {
            const imag = req.body.image;
const response = await cloudinar.uploader.upload(imag,async function(error, result) {
  const image = result.secure_url

            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            signup(username, email, image,hashedPassword, (err) => {
              if (err) {
                res.send(err);
              } else {
                res.send("signup successful");
              }
            })
          });
          } catch {
            res.status(500);
          }
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  getAllEmails(email, (err, result) => {
    if (err) {
      res.send(err);
    }
    if (!result) {
      res.send("user not found");
    } else {
      getPasswordByEmail(email, (err, result) => {
        if (err) {
          res.send(err);
        }
        if (result) {
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
                  res.send("login successful");
                }
              }
            );
          } catch (err) {
            res.send(err);
          }
        } else {
          res.send(err);
        }
      });
    }
  });
});


router.get("/dd",(req, res)=>{
  get((err, result)=>{
    if (err) {res.send(err)}res.send(result);
  })
})

router.post('/getUserinfo',(req, res)=>{
  const email = req.body.email
  getUserName(email,(err, result)=>{
    if(err){res.send(err)}res.json([result[0].username , result[0].image])
  })
})

module.exports = router;
