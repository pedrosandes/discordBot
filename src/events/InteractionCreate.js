const { Events } = require('discord.js');
const { handleRoles } = require('../components/SelectTechs/handleRole');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {

    if (interaction.isButton()) {
      await handleRoles(interaction);
    }

    if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName);
      
      if (!command) {
        console.error(`O comando ${command} não foi encontrado.`);
        return;
      }
  
      try {
        await command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Ocorreu um error enquanto executado este comando', ephemeral: true });
      }
    }
  }
}