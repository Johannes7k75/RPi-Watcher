module.exports = {
	name: 'usage',
	aliases: ['u'],
	category: 'Misc',
	utilisation: '{prefix}usage',

	async execute(client, message) {
		const si = require('systeminformation');
		const Discord = require('discord.js');
		si.currentLoad().then((data) => {
			if (data.currentload < 30) {
				const usageh = new Discord.MessageEmbed()
					.setColor('#00ff00')
					.setTitle('CPU Usage')
					.addFields({ name: 'Auslastung ', value: Math.round(data.currentLoad) + '%', inline: false }, { name: 'Durschnitts Auslastung ', value: Math.round(data.avgLoad * 100) + '%', inline: false });
				message.channel.send(usageh);
			} else {
				const usagel = new Discord.MessageEmbed()
					.setColor('#ad1ca9')
					.setTitle('CPU Usage')
					.addFields({ name: 'Auslastung ', value: Math.round(data.currentLoad) + '%', inline: false }, { name: 'Durschnitts Auslastung ', value: Math.round(data.avgLoad * 100) + '%', inline: false });
				message.channel.send(usagel);
			}
		});
	},
};
