module.exports = async (client, message) => {
    client.guilds.cache.forEach(guild => {
        console.log(`RPi-Watcher is Online on ${guild.name}`);
    })
    client.user.setActivity(`RPI!`, { type: 'PLAYING', url: 'Raspberry-Watcher' });
}
