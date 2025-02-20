const { Router } = require("express");
const newRouter = Router();
const getMessages = require('../controllers/messagesController');

const messages = getMessages();

newRouter.get("/", (req, res) => {
    res.render("form");  
});

newRouter.post("/", (req, res) => {
    messages.push({ text: req.body.text, user: req.body.username, added: new Date() });
    res.redirect("/")
})

module.exports = newRouter;