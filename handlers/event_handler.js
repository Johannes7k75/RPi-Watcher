const fs = require('fs');

module.exports = (client) => {
	fs.readdirSync('./events').forEach((dirs) => {
		const events = fs.readdirSync(`./events/${dirs}`).filter((file) => file.endsWith('.js'));
		for (const file of events) {
			console.log(`Loading discord.js event ${file}`);
			const event = require(`../events/${dirs}/${file}`);
			client.on(file.split('.')[0], event.bind(null, client));
		}
	});
};
