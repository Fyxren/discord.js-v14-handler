const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'animal',
    description: "A test command for showing autocomplete slash command.",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'animal',
            description: 'Choose an animal.',
            type: 3,
            required: true,
            autocomplete: true
        }
    ],
    autocomplete: (interaction, choices) => {
        const data = ['dog', 'cat', 'rabbit', 'lizard', 'horse', 'hamster'];
        data.forEach(animal => {
            choices.push({
                name: `${animal}`,
                value: `${animal}`
            });
        });
        interaction.respond(choices).catch(console.error);
    },
    run: async (client, interaction) => {
        const animal = interaction.options.get('animal').value;
        if (animal) {
            let embed = {
                description: `**${animal}**, I choose you!`,
                color: client.c.main
            }
            return interaction.reply({ embeds: [embed] });
        }
    }
};