module.exports = async (client, message) => {
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const date = new Date();
	client.guilds.cache.forEach((guild) => {
		console.log(`RPi-Watcher is Online on ${guild.name}`);
	});
	client.user.setActivity(`RPI!`, { type: 'PLAYING', url: 'Raspberry-Watcher' });
	const embed = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle('The Bot is online')
		.addFields(
			{
				name: 'Time ',
				value: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
				inline: true,
			},
			{
				name: 'Date',
				value: `${date.getDate()}.${months[date.getMonth()]}.${date.getFullYear()}`,
				inline: true,
			}
		);
	client.channels.cache.get(client.config.discord.rpilogschannel).send(embed);
};
