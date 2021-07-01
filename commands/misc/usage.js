module.exports = {
	name: 'usage',
	aliases: ['u'],
	category: 'Misc',
	utilisation: '{prefix}usage',

	execute(client, message) {
		const si = require('systeminformation');
		const Discord = require('discord.js');
		const color = client.config.embed.color.usage;
		let embed = new Discord.MessageEmbed();
		si.currentLoad().then((data) => {
			if (Math.round(data.currentLoad) < 30) {
				embed
					.setColor(color.st30)
					.setTitle('CPU Usage')
					.addFields({ name: 'Current Usage ', value: Math.round(data.currentLoad) + '%', inline: false }, { name: 'Average Usage ', value: Math.round(data.avgLoad * 100) + '%', inline: false });
			} else {
				embed
					.setColor(color.gt30)
					.setTitle('CPU Usage')
					.addFields({ name: 'Current Usage ', value: Math.round(data.currentLoad) + '%', inline: false }, { name: 'Average Usage ', value: Math.round(data.avgLoad * 100) + '%', inline: false });
			}
			message.channel.send(embed);
		});
	},
};
