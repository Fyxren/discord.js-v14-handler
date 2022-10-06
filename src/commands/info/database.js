const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'database',
    description: "Demo command for the database.",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        /*
        
        The part underneath is basically how you would use it.
        
        Of course this will probably give an error since
        you either don't have a database set in your .env yet,
        or you don't have a table called 'table'.

        */

        client.sql.query(`SELECT * FROM guilds WHERE guildId = ${interaction.guild.id}`, function (err, rows) {

            // Remove the line underneath.
            interaction.channel.send({ content: '**Please look in the code for this command for more info about using MySQL**' });

            if (err) {
                console.log(err);
                return interaction.reply(client.embeds.error);
            }

            console.log(rows);
            return interaction.reply({ content: `Data logged 👍` });

        });
    }
};