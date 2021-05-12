# What is RPi-Watcher
RPi-Watcher is a Discord Bot that can show you a few things about your RaspberryPi.  
RPi-Watcher is written in javascript with a command- and event Handler.
You can use it to Monitor your RaspberryPi remotely.  

# What RPi-Watcher can do
* show you the **temperature**
* show you ypur **cpu usage**
* **clear** messages 
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
        bot_owner_id: 'BOT OWNER ID', 
    },
};
```
  - `TOKEN`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.
  - `PREFIX`, the prefix that will be set to use the bot.
  - `ACTIVITY`, the activity of the bot.
  - `LOG CHANNEL`, the channel where the Bot log when he goes online
  -  `BOT OWNER ID`, the ID of the Bot Owner, so your ID

Then type in the console `npm install` to install all dependencies.
* You have two options to start the Bot
  * with Node.js `node index.js` 
  * or with pm2 `pm2 start index.js -n RPi-Watcher`

The Bot is running and you can start using the commands

# Bot commands
```
usage, returns the current and the usage of the last time in %
temp, returns the temperature of the pi in °C
ip, returns the external ip of the pi if you are the Owner
clear <number>, clears the number of messages you say
```
# Usage
`RPI!<command>`

# Limitations
**clear** command 
* can **only** clear **100 messages** at a time
* **only messages** that are **younger than 14 days** 

# Support
* Write me a Discord Message `Johannes7k75#9801`
* send me a email raspberry.pi.4.jonas@gmail.com
* or make a issue

# Credits
to [ZerioDev](https://github.com/ZerioDev/Music-bot) i used his layout of the README as a base   
to [sebhildebrandt](https://github.com/sebhildebrandt/systeminformation) for the module systemimformation [his Webiste](https://systeminformation.io)   
and to [Worn Off Keys](https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA/videos) tutorial videos to "How to Code a Discord Bot"