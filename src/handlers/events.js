const fs = require('fs');

module.exports = (client) => {
    fs.readdirSync('./src/events').filter((file) => file.endsWith('.js')).forEach((event) => {
        require(`./src/events/${event}`);
    })
    console.log(`Client - Events loaded`);
}