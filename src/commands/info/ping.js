const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Check the ping.",
    type: ApplicationCommandType.ChatInput,
    cooldown: 10000,
    run: async (client, interaction) => {
        let embed = {
            description: `🏓 Latency: \`${Math.round(client.ws.ping)} ms\``,
            color: client.c.main
        }
        interaction.reply({ embeds: [embed] });
    }
};