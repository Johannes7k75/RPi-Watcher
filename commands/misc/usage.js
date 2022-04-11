const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'usage',
	aliases: ['u'],
	category: 'Misc',
	utilisation: '{prefix}usage',

	execute(client, message) {
		const si = require('systeminformation');
		const color = client.config.embed.color.usage;
		si.currentLoad().then((data) => {
			message.channel.send({
				embeds: [
					new MessageEmbed()
						.setTitle("CPU Usage")
						.setColor(Math.round(data.currentLoad) < 30 ? color.st30 : color.gt30)
						.addFields([
							{ name: 'Current Usage', value: `${Math.round(data.currentLoad)}%`, inline: false },
							{ name: 'Average Usage', value: `${Math.round(data.avgLoad * 100)}%`, inline: false }
						])
				]
			});
		});
	},
};
