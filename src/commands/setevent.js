const { SlashCommandBuilder, ChannelType, bold, EmbedBuilder } = require('discord.js');
const { selectTechs } = require('../components/SelectTechs');

const eventOptions = {
  SELECIONAR_TECNOLOGIAS: {
    name: 'Selecionar cargos',
    value: 'select_techs'
  }
}

const event = {
  [eventOptions.SELECIONAR_TECNOLOGIAS.value]: {
    name: 'Selecionar cargos',
    component: selectTechs
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setevent')
    .setDescription('Selecione os canais que acontecerá determinado evento.')
    .addChannelOption(option => option
      .setName('channel')
      .setDescription('Selecione o canal')
      .addChannelTypes(ChannelType.GuildText)
      .setRequired(true)
    )
    .addStringOption(option => option
      .setName('event')
      .setDescription('Selecione o evento que vai acontecer no canal')
      .addChoices(
        ...Object.values(eventOptions)
      )
      .setRequired(true)
    )
  ,
  async execute(interaction) {
    const selectedChannel = interaction.options.get('channel');
    const selectedEvent = interaction.options.get('event');
    
    const channelName = bold(selectedChannel.channel.name.toUpperCase());
    const eventName = bold(event[selectedEvent.value].name.toLocaleUpperCase());

    event[selectedEvent.value].component(selectedChannel.channel);

    const successEmbed = new EmbedBuilder()
      .setColor("#4BB543")
      .setTitle("Evento adicionado com sucesso!")
      .setDescription(`O evento ${eventName} foi adicionado ao canal ${channelName}.`)
      .setAuthor( { name: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
      .setTimestamp();

    await interaction.reply({ embeds: [successEmbed], ephemeral: true });
  }
}