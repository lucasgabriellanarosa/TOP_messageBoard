const db = require("../db");

const getMessages = () => {
  const messages = db.getMessages();
  return messages;
}

module.exports = getMessages;