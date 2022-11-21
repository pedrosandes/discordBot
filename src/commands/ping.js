// const wait = require('node:timers/promises').setTimeout;
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responde com Pong!'),
  async execute(interaction) {

    await interaction.reply('Pong!');

    // const locales = {
    //   "pt-br": 'Olá mundo',
    //   "en-us": 'Hello world,'  
    // }

    /**
     *  deferReply - Faz com que o bot "pense", e demore até 15 minutos para enviar a respostas,
     *  com isso devemos utilizar o "editReply", para ele editar a própria resposta.
     * 
     *  followUp - Além da resposta, com o followUp podemos enviar outra mensagem, porém, se
     *  utilizamos o deferReply, ele apenas ira editar a mensagem enviada.
     * 
     *  editReply - Edita a mensagem enviada.
     * 
     *  deleteReply - Ele deleta a mensagem enviada.
     * 
     *  fetchReply - Ele busca e retorna um Message, que contém dados sobre o comando e do user.
     * 
     *  ephemeral - Quando true, a mensagem enviada pelo bot aparecerá apenas para quem envio 
     *  o comando.
     */

    // await interaction.reply({
    //   content: locales[interaction.locale.toLowerCase()] ?? 'Olá mundo(Mensagem padrão)',
    //   epemeral: true
    // });
    // await wait(2000);
    // const message = await interaction.fetchReply();
    // console.log(message);
    // await interaction.deferReply({ ephemeral: true }); 
    // await wait(4000);
    // await interaction.followUp({ content: 'Pong novamente! [Link](https://discord.js.org)', ephemeral: true });
    // await interaction.editReply({content: 'Pong novamente!', ephemeral: true});
  }
}