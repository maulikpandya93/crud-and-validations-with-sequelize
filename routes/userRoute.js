const express = require('express');
const { signup, login } = require('../controllers/userController');
const { validateUser } = require('../middlewares/userCheck');
const router = express.Router();

router
.route("/")
.get((req, res) => {
    res.send(`THIS IS SIGNUP AND LOGIN PAGE
    YOU HAVE TO GIVE EMAIL ID AND PASSWORD`)
})

router
.route("/signup")
.post( validateUser, signup)

router
.route("/login")
.post(login)

module.exports = router;