const { Events, EmbedBuilder } = require('discord.js');

const colors = [
  "#0A2239",
  "#53A2BE",
  "#1D84B5",
  "#132E32",
  "#176087",
  "#00CDCD",
];

module.exports = {
  name: Events.GuildMemberAdd,
  execute(interaction) {
    const welcomeChannel = interaction.client.channels.cache.get(process.env.DISCORD_WELCOME_ID);

    const welcomeEmbed = new EmbedBuilder()
      .setColor(colors[Math.floor(Math.random() * 6)])
      .setTitle(`Seja bem-vindo ao ${interaction.guild.name}.`)
      .setDescription('Desfrute do nosso servidor, faça networking, tire dúvidas, ajude, seja ajudado e muito mais!')
      .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
      .setThumbnail(interaction.user.displayAvatarURL())
      .setTimestamp();

    welcomeChannel.send({ embeds: [welcomeEmbed] });
  }
}