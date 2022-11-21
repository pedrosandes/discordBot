const { SlashCommandBuilder, ChannelType } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Respode com sua entrada!')
  .addSubcommand(subcommand =>
		subcommand
			.setName('user')
			.setDescription('Info about a user')
			.addUserOption(option => option.setName('target').setDescription('The user')))
	.addSubcommand(subcommand =>
		subcommand
			.setName('server')
			.setDescription('Info about the server')),
    // .addStringOption(option => 
    //   option.setName('input')
    //     .setDescription('O input de eco volta')
    //     .addChoices(
    //       {name: 'Engraçado', value: 'gif_funny'},
    //       {name: 'Meme', value: 'gif_meme'},
    //       {name: 'Filmes', value: 'gif_movie'}
    //     ) 
    //     .setMaxLength(2000)
    // )
    // .addChannelOption(option => 
    //   option.setName('channel')
    //     .setDescription('O canal para ecoar')
    //     .addChannelTypes(ChannelType.GuildText)
    // )
    // .addBooleanOption(option => 
    //   option.setName('ephemeral')
    //     .setDescription('Se o eco deve ou não ser efêmero')
    // ),
  async execute(interaction) {
  }
}