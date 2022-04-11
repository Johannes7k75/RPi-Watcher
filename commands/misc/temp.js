const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'temp',
	aliases: ['t'],
	category: 'Misc',
	utilisation: '{prefix}temp',

	async execute(client, message) {
		const si = require('systeminformation');
		const color = client.config.embed.color.temp;
		si.cpuTemperature().then((data) => {
			message.channel.send({ embeds: [new MessageEmbed().setTitle("Temperature").setDescription(`It\'s ${Math.round(data.main)} celsius`).setColor(data.main > 45 ? color.gt50 : color.st50)] });
		});
	},
};
