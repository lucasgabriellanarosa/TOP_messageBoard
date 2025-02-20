const { Router } = require("express");
const indexRouter = Router();

const getMessages = require('../controllers/messagesController');


indexRouter.get("/", (req, res) => {
    const messages = getMessages();
    res.render("index", { messages: messages });  
});

module.exports = indexRouter;