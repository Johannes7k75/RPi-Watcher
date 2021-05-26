module.exports = {
	name: 'clear',
	aliases: ['c'],
	category: 'Misc',
	utilisation: '{prefix}clear <number>',

	async execute(client, message, args) {
		if (!args[0]) return message.reply('please enter the amount of messages that you want to clear!');
		if (isNaN(args[0])) return message.reply('pleas type a real number!');

		if (args[0] > 100) return message.reply("you can't delete more than 100 messages!");
		if (args[0] < 1) return message.reply('you must delete atleast one message!');
		await message.channel.messages.fetch({ limit: args[0] }).then((messages) => {
			message.channel.bulkDelete(1);
			message.channel.bulkDelete(messages);
		});
	},
};
