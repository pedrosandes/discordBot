const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Prover informações sobre o servidor.'),
  async execute(interaction) {
    await interaction.reply(`Esse servidor é ${interaction.guild.name} e tem ${interaction.guild.memberCount} membros.`)
  }
}