const fs = require('node:fs');
const path = require('node:path');
const { Collection } = require('discord.js');

module.exports = {
  getAllComands(client) {
    client.commands = new Collection();

    const commandsPath = path.join(__dirname, '../commands');
    const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandsFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
  
      if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
      } else {
        console.log(`[ATENÇÃO] O comando ${filePath} necessáriamente precisa das propriedades  "data" e "execute"`);
      }
    }
  }
}