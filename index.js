//requirements
const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
const date = new Date();

client.commands = new Discord.Collection();
client.config = require('./config/bot');
const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

client.on('ready', () => {
    client.channels.cache.get(client.config.discord.rpilogschannel).send('```' + 'Der Bot ist Online ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + date.getDate() + '. ' + months[date.getMonth()] + '```')
});

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(client.config.discord.token);