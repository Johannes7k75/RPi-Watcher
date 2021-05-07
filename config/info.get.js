const si = require('systeminformation')
// setInterval(function () {
var info = []

async function tempData() {
    try {
        const data = await si.cpuTemperature();
        info.push({ "temp": Math.round(data.main) });
        console.log(Math.round(data.main))
        var json = JSON.stringify(info);
        var fs = require('fs');
        fs.writeFile('temp.chart.json', json, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    } catch (e) {
        return
    }
}
async function usageData() {
    try {
        const data = await si.currentLoad();
        info.push({ "usage": Math.round(data.currentLoad) });
        console.log(Math.round(data.currentLoad))
        var json = JSON.stringify(info);
        var fs = require('fs');
        fs.writeFile('temp.chart.json', json, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    } catch (e) {
        return
    }
}

tempData()
usageData()

console.log(info)
var json = JSON.stringify(info);
var fs = require('fs');
fs.writeFile('temp.chart.json', json, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});



    //console.log(temp1)
    // si.cpuTemperature().then(data => {
    //     console.log(data.main)
    // })
    // si.currentLoad(data.currentLoad).then(data => {
    //     console.log(Math.round(data.currentLoad))
    // })

    // info.push({ ata.main }: "31",})


// });