const fs = require('fs');
const chalk = require('chalk');

module.exports = (client) => {
	fs.readdirSync('./events').forEach((dirs) => {
		const events = fs.readdirSync(`./events/${dirs}`).filter((file) => file.endsWith('.js'));
		for (const file of events) {
			console.log(chalk.bold.cyan(`Loading discord.js event`), chalk.yellow(file));
			const event = require(`../events/${dirs}/${file}`);
			client.on(file.split('.')[0], event.bind(null, client));
		};
	});
};
