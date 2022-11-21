const { EmbedBuilder } = require('discord.js');
const { roles } = require('./content');

module.exports = {
  async handleRoles(interaction) {
     try {
       const role = roles[interaction.customId.toUpperCase()];
       
      if (!role?.id) {
        throw new Error(`O id do cargo não foi encontrado.`)
      }
      await interaction.deferReply({ ephemeral: true });
      
      if (interaction.member.roles.cache.has(role.id)) {
        const embedRemove = new EmbedBuilder()
        .setColor("#0099FF")
        .setDescription(`O cargo \`@${role.name}\` foi removido.`);
        
        await interaction.member.roles.remove(role.id);
        await interaction.editReply({
          embeds: [embedRemove]
        });
      
      } else {
        
        const embedSuccess = new EmbedBuilder()
        .setColor("#0099FF")
        .setDescription(`O cargo \`@${role.name}\` foi adicionado.`);
        
        await interaction.member.roles.add(role.id);
        await interaction.editReply({
          embeds: [embedSuccess],
        });
      }

     } catch (error) {
       console.log(error)
       const embedError = new EmbedBuilder()
         .setColor("#ff3333")
         .setDescription(`${error}`);
       
      await interaction.reply({ embeds:[embedError], ephemeral: true });
    };
  }
}