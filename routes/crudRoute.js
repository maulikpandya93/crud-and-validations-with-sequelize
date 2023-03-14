const express = require('express');
const { insert, update, remove } = require('../controllers/crudController');
const router = express.Router();

router
.route("/")
.get((req, res) => {
    res.send(`CRUD OPERATIONS: 
    INSERT
    UPDATE
    DELETE`)
})
.post(insert)
.put(update)
.delete(remove)

module.exports = router;