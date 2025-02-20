const { Router } = require("express");
const { getMessages } = require('../controllers/messagesController');

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    console.log(getMessages());

    res.send("This route will not be reached because the previous route's path matches first.");
});