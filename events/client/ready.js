module.exports = async (client, message) => {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const date = new Date();
	const chalk = require('chalk');
	const color = client.config.embed.color.ready;
	client.guilds.cache.forEach((guild) => {
		console.log(chalk.greenBright(`RPi-Watcher is Online on ${guild.name}`));
	});
	client.user.setActivity(`RPI!`, { type: 'PLAYING', url: 'Raspberry-Watcher' });
	embed = {
		title: 'The Bot is online',
		color: color,
		fields: [
			{
				name: 'Time',
				value: `<t:${Math.floor(Date.now()/1000)}:T>`,
				inline: true,
			},
			{
				name: 'Date',
				value: `<t:${Math.floor(Date.now()/1000)}:D>`,
				inline: true,
			}
		]
	};
	client.channels.cache.get(client.config.discord.rpilogschannel).send({ embeds: [embed] });
};
