module.exports = {
    name: "ip",
    aliases: "i",
    async execute(client, message) {
        const si = require("systeminformation")
        const Discord = require("discord.js")
        si.networkConnections().then(data => {
            console.log(data)
            const usageh = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setTitle('CPU Usage')
                .addFields(
                    { name: 'IP ', value: data },
                )
            message.channel.send(usageh);

        });
    }
}
