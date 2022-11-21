const {  EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

const { techsButtons } = require('./content');

module.exports = {
  async selectTechs(channel) {
   const embed = new EmbedBuilder()
      .setColor("#0099FF")
      .setTitle('Selecione suas techs')
      .setDescription('Selecione suas tecnologias para ter acesso aos canais referente a ela.')

    const buttons = techsButtons.map(button => {
      return new ButtonBuilder()
        .setCustomId(button.customId)
        .setLabel(button.label)
        .setStyle(ButtonStyle.Secondary)
    });

    const firstRow = new ActionRowBuilder().addComponents(buttons.slice(0, 5));    
    const secondRow = new ActionRowBuilder().addComponents(buttons.slice(5, buttons.length));

    channel.send({ embeds: [embed], components: [firstRow, secondRow] })
  }
}