const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(interaction) {
    console.log(`[ATIVO] Pronto! Logado em ${interaction.user.tag}`)
  }
}