module.exports = {
	name: 'usage',
	aliases: ['u'],
	category: 'Misc',
	utilisation: '{prefix}usage',

	execute(client, message) {
		const si = require('systeminformation');
		const color = client.config.embed.color.usage;
		si.currentLoad().then((data) => {
			if (Math.round(data.currentLoad) < 30) {
				embed = {
					title:'CPU Usage',
					fields:[
						{
							name: 'Current Usage',
							value: `${Math.round(data.currentLoad)}%`,
							inline: false }, 
						{ 
							name: 'Average Usage',
							value: `${Math.round(data.avgLoad * 100)}%`,
							inline: false 
						}
					],
					color:color.st30
				}
			} else {
				embed = {
					title:'CPU Usage',
					fields:[
						{
							name: 'Current Usage',
							value: `${Math.round(data.currentLoad)}%`,
							inline: false }, 
						{ 
							name: 'Average Usage',
							value: `${Math.round(data.avgLoad * 100)}%`,
							inline: false 
						}
					],
					color:color.gt30
				}
			}
			message.channel.send({embeds:[embed]});
		});
	},
};
