module.exports = (client) => {
    const si = require('systeminformation');
    var dataCache = client.cache;

    async function getTemp() {
        temp = await si.cpuTemperature();
        if (dataCache.temp.length > 120) {
            dataCache.temp.splice(0, 1);
        }
        dataCache.temp.push(temp.main || 0);
    }
    setInterval(getTemp, 2000);

    async function getUsage() {
        usage = await si.currentLoad();
        var load = 0;
        for (i = 0; i < usage.cpus.length; i++) {
            load += parseInt(usage.cpus[i].load);
        }
        currentLoad = load / usage.cpus.length;
        dataCache.usage.push(currentLoad);
        if (dataCache.usage.length > 120) {
            dataCache.usage.splice(0, 1);
        }
    }
    setInterval(getUsage, 2000);
};
