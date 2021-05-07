module.exports = {
    name: "ip",
    aliases: "i",
    async execute(client, message) {
        const si = require("systeminformation")
        const Discord = require("discord.js")
        si.networkInterfaces().then(data => {
            const usageh = new Discord.MessageEmbed()
                .setColor('#00ff00')
                .setTitle('CPU Usage')
                .addFields(
                    { name: 'IP ', value: data[0].dhcp },
                )
            message.channel.send(usageh);

        });
    }
}
