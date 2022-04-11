const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ip',
    aliases: ['i'],
    category: 'Misc',
    utilisation: '{prefix}ip',

    async execute(client, message) {
        if (message.author.id == client.config.discord.bot_owner_id) {
            const color = client.config.embed.color.ip;
            ifconfig = require('ifconfig.me');
            ifconfig.get(function (data) {
                message.channel.send({ embeds: [new MessageEmbed().setTitle("External IP").addField("IP", `||${data.ip_addr}||`).setColor(color)] });
            });
        } else {
            message.channel.send({ content: "You are not the Owner" });
        };
    },
};
