module.exports = {
	name: 'temp',
	aliases: ['t'],
	category: 'Misc',
	utilisation: '{prefix}temp',

	async execute(client, message) {
		const si = require('systeminformation');
		const Discord = require('discord.js');
		const color = client.config.embed.color.temp;
		si.cpuTemperature().then((data) => {
			if (data.main > 45) {
				const temphEmbed = new Discord.MessageEmbed()
					.setColor(color.gt50)
					.setTitle('Temperature')
					.setDescription("It's " + Math.round(data.main) + ' celsius');
				message.channel.send(temphEmbed);
			} else {
				const tempcEmbed = new Discord.MessageEmbed()
					.setColor(color.st50)
					.setTitle('Temperature')
					.setDescription("It's " + Math.round(data.main) + ' celsius');
				message.channel.send(tempcEmbed);
			}
		});
	},
};
