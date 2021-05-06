module.exports = {
    name: 'qchart',
    aliases: 'qc',

    async execute(client, message) {
        const QuickChart = require('quickchart-js')
        const data = require('../../config/temp.chart.json');
        const temp = []
        const time = []
        const usage = []

        for (const item of data) {
            temp.push(item.temp)
            time.push(item.time)
            usage.push(item.usage)
        }
        const chart = new QuickChart();
        chart.setConfig({
            width: '1000',
            height: '750',
            type: 'line',
            data: {
                labels: time,
                datasets: [{
                    label: 'temperature',
                    data: temp,
                    borderColor: '#FF6384',
                    backgroundColor: '#FFB1C1',
                    spanGaps: true,
                },
                {
                    label: 'usage',
                    data: usage,
                    borderColor: '#36A2EB',
                    backgroundColor: '#9AD0F5',
                    spanGaps: true
                }]
            },
            options: {
                y: {
                    beginAtZero: true,
                    title: {
                        color: "#9AD0F5"
                    }
                }
            }
        })
            .setWidth(1000)
            .setHeight(750);
        const url = await chart.getShortUrl();
        message.channel.send(`${url}`)

    }
}