# What RPi-Watcher can do
* show you the **temperature**
* show you ypur **cpu usage**
* 

# How to install RPi-Watcher
```
git clone https://github.com/Johannes7k75/RPi-Watcher
```
add a file with the name **bot.js** with following content in the **config** folder  
```javascript
module.exports = {
    discord: {
        token: 'YOR TOKEN HERE',
        prefix: 'PREFIX',
        activity: 'YOR ACTIVITY HERE',
        rpilogschannel: 'THE LOG CHANNEL',
    },
};
```



oder ka wie sonst  
