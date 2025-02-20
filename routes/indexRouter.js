const { Router } = require("express");
const getMessages = require('../controllers/messagesController');

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    const messages = getMessages();
    res.render("index", { messages: messages });  
});

module.exports = indexRouter;