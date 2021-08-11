const Discord = require('discord.js');
module.exports = (client, message) => {
	if (!message.content.startsWith(client.config.discord.prefix) || message.author.bot) return;

	const args = message.content.slice(client.config.discord.prefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();

	const command = client.commands.get(cmd) || client.commands.find((command) => command.aliases && command.aliases.includes(cmd));

	if (command) command.execute(client, message, args, Discord);
};
