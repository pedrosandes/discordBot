const { config } = require('dotenv');
const { Client, GatewayIntentBits } = require('discord.js');
const { init } = require('./utils/init');

config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.MessageContent,
]});

init(client);

client.login(process.env.DISCORD_TOKEN);