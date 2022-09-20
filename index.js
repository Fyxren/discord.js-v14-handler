require('dotenv').config();
const fs = require('fs');
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
client.buttons = new Collection();

module.exports = client;

fs.readdirSync('./src/handlers').forEach((handler) => {
    require(`./src/handlers/${handler}`)(client);
});

client.login(process.env.BOT_TOKEN);