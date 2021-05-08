module.exports = {
    name: "ip",
    aliases: "i",
    async execute(client, message) {
        const Discord = require("discord.js")
        ifconfig = require('ifconfig.me');
        ifconfig.get(function (data) {
            const embdeIP = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setTitle('External IP')
                .addFields(
                    { name: 'IP ', value: data.ip_addr },
                )
            message.channel.send(embdeIP);
        })
    }
}
