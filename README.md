# What RPi-Watcher can do
* show you the **temperature**
* show you ypur **cpu usage**
* and can show you the **ip**

# How to install RPi-Watcher
```
git clone https://github.com/Johannes7k75/RPi-Watcher
```
add a file in the **config** folder with the name **bot.js** 
* For configuration
```javascript
module.exports = {
    discord: {
        token: 'TOKEN',
        prefix: 'PREFIX',
        activity: 'ACTIVITY',
        rpilogschannel: 'LOG CHANNEL',
    },
};
```
  - `token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.
  - `prefix`, the prefix that will be set to use the bot.
  - `activity`, the activity of the bot.

Then type in the console `npm install` tto install all dependencies.
* You have two options to start the Bot
  * with Node.js `node index.js` 
  * or with pm2 `pm2 start index.js -n RPi-Watcher`

The Bot is running and you can start using the commands

# Bot commands
```
usage, returns the current and the usage of the last time in %
temp, returns the temperature of the pi in °C
ip, returns the external ip of the pi
```
# Usage
`RPI!<command>`

# Credits
to [ZerioDev](https://github.com/ZerioDev/Music-bot) i used his layout of the README as a base   
to [sebhildebrandt](https://github.com/sebhildebrandt/systeminformation) for the module systemimformation [his Webiste](https://systeminformation.io)
and to [Worn Off Keys](https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA/videos) tutorial videos to "How to Code a Discord Bot"