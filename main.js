const Commando = require('discord.js-commando');
const path = require('path')
const config = require('./config/bot');
const client = new Commando.CommandoClient({
    owner: '587701169103699994',
    commandPrefix: config.discord.prefix,
})

client.on('ready', async () => {
    client.guilds.cache.forEach(guild => {
        console.log(`RPi-Watcher is Online on ${guild.name}`);
    })
    client.user.setActivity(config.discord.prefix, { type: 'PLAYING', url: 'Raspberry-Watcher' });
    client.registry
        .registerGroups([
            ['misc', 'misc commands'],
        ])
        .registerDefaults()
        .registerCommandsIn(path.join(__dirname, 'cmds'))
})
// client.commands = new Commando.Collection();
// client.events = new Commando.Collection();


// ['command_handler', 'event_handler'].forEach(handler => {
//     require(`./handlers/${handler}`)(client, Discord);
// })

client.login(config.discord.token);