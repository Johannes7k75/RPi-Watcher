module.exports = {
    name: 'clear',
    aliases: ['c'],
    category: 'moderation',

    async execute(client, message, args) {
        if (!args[0])
            return message.reply({ content: "please enter the amount of messages that you want to clear!" });
        if (isNaN(args[0])) return message.reply({ content: "pleas type a real number!" });

        if (args[0] > 100)
            return message.reply({ content: "you can't delete more than 100 messages!" });
        if (args[0] < 1)
            return message.reply({ content: "you must delete atleast one message!" });
        await message.delete();
        await message.channel.messages
            .fetch({ limit: Math.round(args[0]) })
            .then(messages => {
                message.channel.bulkDelete(messages);
            });
    },
};
