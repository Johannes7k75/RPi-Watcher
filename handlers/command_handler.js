
const fs = require('fs');


module.exports = (client) => {
    console.log('test')
    fs.readdirSync('./commands').forEach(dirs => {
        const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

        for (const file of commands) {
            const command = require(`../commands/${dirs}/${file}`);
            console.log(`Loading command ${file}`);
            client.commands.set(command.name.toLowerCase(), command);
        };
    });
}