const { SlashCommandBuilder, time } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Prover informações sobre o usuário'),
  async execute(interaction) {
    await interaction.reply(`Esse comando foi executado por ${interaction.user.username}, que entrou ${time(interaction.member.joinedAt, 'R')};`)
  },
}