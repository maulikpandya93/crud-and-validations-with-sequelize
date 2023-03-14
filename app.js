require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const sequelize = require('./connection/db_connect');
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        message : 'HOME PAGE!'
    })
})

app.use("/user", require("./routes/userRoute"));
app.use("/crud", require("./routes/crudRoute"));
app.use("/info", require("./routes/infoRoute"));

sequelize.authenticate().then(() => {
    console.log('DB CONNECTED!');
    app.listen(PORT, () => {
        console.log(`SERVER STARTED ON PORT ${PORT}`);
    })
})