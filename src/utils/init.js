const { getAllComands } = require("./getAllCommands");
const { getAllEvents } = require("./getAllEvents");

module.exports = {
  init(client) {
    getAllComands(client);
    getAllEvents(client);
  }
}