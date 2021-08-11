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
				embed = { title: 'External IP', fields: [{ name: 'IP', value: `||${data.ip_addr}||` }], color: color }
				message.channel.send({ embeds: [embed] });
			});
		} else {
			message.channel.send('You are not the Owner');
		}
	},
};
