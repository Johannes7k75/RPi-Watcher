//requirements
const Discord = require('discord.js');
const si = require('systeminformation');
const temp = require("pi-temperature");
const get_info = require('./config/info.get')
const fs = require('fs');
const osutils = require('os-utils')
const guildID = '743801945596362754'

const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
const date = new Date();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.config = require('./config/bot');
const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

const getApp = (guildID) => {
    const app = client.api.applications(client.user.id)
    if (guildID) {
        app.guilds(guildID)
    }
    return app
}
client.on('ready', () => {
    client.channels.cache.get(client.config.discord.rpilogschannel).send('```' + 'Der Bot ist Online ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + date.getDate() + '. ' + months[date.getMonth()] + '```')
    get_info
})

client.on('ready', async () => {
    const commands = await getApp(guildID).commands.get()
    console.log(commands)
    await getApp(guildID).commands.post({
        data: {
            name: 'ping',
            description: 'A  simple  ping  pong  command',
        },
    })
    await client.api.applications(client.user.id)
    console.log('Raspberry-Watcher Ready');
    si.inetChecksite('google.com').then(data => console.log(data));
    osutils.cpuUsage(function (v) {
        var vaus = v * 100
        console.log(vaus)
    });

});

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(client.config.discord.token);