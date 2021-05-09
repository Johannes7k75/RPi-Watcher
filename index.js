//requirements
const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
const date = new Date();

client.commands = new Discord.Collection();
client.config = require('./config/bot');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

client.on('ready', () => {
    const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('The Bot is online')
        .addFields(
            { name: 'Time ', value: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`, inline: true },
            { name: 'Date', value: `${date.getDate()}.${months[date.getMonth()]}.${date.getFullYear()}`, inline: true }
        )
    client.channels.cache.get(client.config.discord.rpilogschannel).send(embed)
});

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


client.login(client.config.discord.token);