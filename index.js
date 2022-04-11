const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
client.config = require('./other/bot');
client.cache = { temp: [], usage: [] };

client.on('ready', () => {
	console.log('Ready');
});

require('./other/collector')(client);

['command_handler', 'event_handler'].forEach((handler) => {
	require(`./handlers/${handler}`)(client);
});

client.login(client.config.discord.token);
