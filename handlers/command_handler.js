const fs = require('fs');
const chalk = require('chalk');

module.exports = (client) => {
	fs.readdirSync('./commands').forEach((dirs) => {
		const commands = fs.readdirSync(`./commands/${dirs}`).filter((files) => files.endsWith('.js'));

		for (const file of commands) {
			const command = require(`../commands/${dirs}/${file}`);
			console.log(chalk.bold.blue(`Loading command`), chalk.green(file));
			client.commands.set(command.name.toLowerCase(), command);
		}
	});
};
