require('dotenv').config();
const fs = require('fs');
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
client.buttons = new Collection();
client.embeds = require('./src/data/config/embeds');
client.e = require('./src/data/config/emotes');
client.c = require('./src/data/config/colors ');

module.exports = client;

fs.readdirSync('./src/handlers').forEach((handler) => {
    require(`./src/handlers/${handler}`)(client);
});

client.login(process.env.BOT_TOKEN);