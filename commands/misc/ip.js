module.exports = {
	name: 'ip',
	aliases: ['i'],
	category: 'Misc',
	utilisation: '{prefix}ip',

	async execute(client, message) {
		if (message.author.id == client.config.discord.bot_owner_id) {
			const Discord = require('discord.js');
			const color = client.config.embed.color.ip;
			ifconfig = require('ifconfig.me');
			ifconfig.get(function (data) {
				const embdeIP = new Discord.MessageEmbed()
					.setColor(color)
					.setTitle('External IP')
					.addFields({ name: 'IP ', value: '||' + data.ip_addr + '||' });
				message.channel.send(embdeIP);
			});
		} else {
			message.channel.send('You are not the Owner');
		}
	},
};
