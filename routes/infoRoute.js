const express = require('express');
const { byId, all } = require('../controllers/infoController');
const { login } = require('../controllers/userController');
const { isAuth } = require('../middlewares/userCheck');
const router = express.Router();

router
.route("/byId/:id")
.get(byId)

router
.route("/all")
.get(isAuth, all)

router
.route("/data")
.get(login)

module.exports = router;