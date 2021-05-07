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


client.on('message', message => {
    if (!message.content.startsWith(client.config.discord.prefix) || message.author.bot) return;

    const args = message.content.slice(client.config.discord.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Only for Raspbian 
    // if (command === 'temp') {
    //     temp.measure(function (err, temp) {
    //         console.log("It's " + temp + " celsius.")
    //         if (temp < 50) {
    //             const tempcEmbed = new Discord.MessageEmbed()
    //                 .setColor('#4281f5')
    //                 .setTitle('Temperature')
    //                 .setDescription("It's " + temp + " celsius");
    //             message.channel.send(tempcEmbed);
    //             console.log('Cool');
    //         } else {
    //             const temphEmbed = new Discord.MessageEmbed()
    //                 .setColor('#f54242')
    //                 .setTitle('Temperature')
    //                 .setDescription("It's " + temp + " celsius");
    //             message.channel.send(temphEmbed);
    //             console.log('Hot');
    //         }
    //     });
    // }

    // if (command === 'usage') {
    //     osutils.cpuUsage(function (v) {
    //         var vaus = v * 100
    //         if (vaus < 40) {

    //             const cpuud = new Discord.MessageEmbed()
    //                 .setColor('#f54242')
    //                 .setTitle('CPU Usage')
    //                 .setDescription(Math.round(vaus) + '%');
    //             message.channel.send(cpuud);
    //             console.log(Math.round(vaus));

    //         } else {
    //             const cpuud = new Discord.MessageEmbed()
    //                 .setColor('#ad1ca9')
    //                 .setTitle('CPU Usage')
    //                 .setDescription(Math.round(vaus) + '%');
    //             message.channel.send(cpuud);
    //             console.log(Math.round(vaus));
    //         }

    //     })
    // };

    // For Ubuntu and other OS's
    // if (command === 'temp') {
    //     si.cpuTemperature().then(data => {
    //         if (data.main > 45) {
    //             const temphEmbed = new Discord.MessageEmbed()
    //                 .setColor('#f54242')
    //                 .setTitle('Temperature')
    //                 .setDescription("It's " + Math.round(data.main) + " celsius");
    //             message.channel.send(temphEmbed);
    //         } else {
    //             const tempcEmbed = new Discord.MessageEmbed()
    //                 .setColor('#4281f5')
    //                 .setTitle('Temperature')
    //                 .setDescription("It's " + Math.round(data.main) + " celsius");
    //             message.channel.send(tempcEmbed);
    //         }
    //     });
    // }

    // if (command === 'usage') {

    //     si.currentLoad().then(data => {
    //         console.log(Math.round(data.currentload) + '%');
    //         const avgloadR = Math.round(data.avgload * 100)
    //         console.log('Im Durchsnitt ' + avgloadR + '%');

    //         if (data.currentload < 30) {
    //             const usageh = new Discord.MessageEmbed()
    //                 .setColor('#00ff00')
    //                 .setTitle('CPU Usage')
    //                 .addFields(
    //                     { name: 'Auslastung ', value: Math.round(data.currentload) + '%' },
    //                     { name: 'Durschnitts Auslastung ', value: Math.round(data.avgload * 100) + '%' }
    //                 )
    //             message.channel.send(usageh);
    //         } else {
    //             const usagel = new Discord.MessageEmbed()
    //                 .setColor('#ad1ca9')
    //                 .setTitle('CPU Usage')
    //                 .addFields(
    //                     { name: 'Auslastung ', value: Math.round(data.currentload) + '%' },
    //                     { name: 'Durschnitts Auslastung ', value: Math.round(data.avgload * 100) + '%' }
    //                 )
    //             message.channel.send(usagel);
    //         }
    //     })
    // }

}


)


client.login(client.config.discord.token);