module.exports = {
	name: 'help',
	aliases: ['h'],
	category: 'Misc',
	utilisation: '{prefix}help <command name>',

	async execute(client, message, args) {
		const color = client.config.embed.color.help;
		if (!args[0]) {
			const misc = message.client.commands
				.filter((x) => x.category == 'Misc')
				.map((x) => '`' + x.name + '`')
				.join(', ');
			message.channel.send({
				embed: {
					color: color,
					title: 'Help Menu',
					fields: [{ name: 'Commands', value: misc }],
				},
			});
		} else {
			const command = message.client.commands.get(args.join(' ').toLowerCase()) || message.client.commands.find((x) => x.aliases && x.aliases.includes(args.join(' ').toLowerCase()));

			if (!command) return message.channel.send(` - I did not find this command !`);

			message.channel.send({
				embed: {
					color: color,
					author: { name: 'Help Menu' },
					fields: [
						{ name: 'Name', value: command.name, inline: true },
						{ name: 'Category', value: command.category, inline: true },
						{ name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
						{ name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
					],
				},
			});
		}
	},
};
