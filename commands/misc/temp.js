module.exports = {
	name: 'temp',
	aliases: ['t'],
	category: 'Misc',
	utilisation: '{prefix}temp',

	async execute(client, message) {
		const si = require('systeminformation');
		const color = client.config.embed.color.temp;
		si.cpuTemperature().then((data) => {
			if (data.main > 45) {
				embed = { title: 'Temperature', color: `${color.gt50}`, description: `It\'s ${Math.round(data.main)} celsius` };
				message.channel.send({ embeds: [embed] });
			} else {
				embed = { title: 'Temperature', color: `${color.st50}`, description: `It\'s ${Math.round(data.main)} celsius` };
				message.channel.send({ embeds: [embed] });
			}
		});
	},
};
