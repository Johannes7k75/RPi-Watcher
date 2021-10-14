const si = require('systeminformation');
const fs = require('fs');
var data_file = require('./data.json');

async function getTemp() {
    temp = await si.cpuTemperature();
    if (data_file.temp.length > 120) {
        data_file.temp.splice(0, 1);
    }
    data_file.temp.push(temp.main);
    var stream = fs.createWriteStream(`./other/data.json`, { flags: 'w' });
    stream.write(`${JSON.stringify(data_file, null, '\t')}`);
}
setInterval(getTemp, 2000);

async function getUsage() {
    usage = await si.currentLoad();
    var load = 0;
    for (i = 0; i < usage.cpus.length; i++) {
        load += parseInt(usage.cpus[i].load);
    }
    currentLoad = load / usage.cpus.length;
    data_file.usage.push(currentLoad);
    if (data_file.usage.length > 120) {
        data_file.usage.splice(0, 1);
    }
    var stream = fs.createWriteStream(`./other/data.json`, { flags: 'w' });
    stream.write(`${JSON.stringify(data_file, null, '\t')}`);
}
setInterval(getUsage, 2000);
