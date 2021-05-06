module.exports = {
    name: 'chart',
    aliases: 'c',

    async execute(client, message) {
        const QuickChart = require('quickchart-js')
        const chart = new QuickChart();
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Try hiding me',
                data: [65, 59, 80, 81, 26, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
            }]
        };
        chart.setConfig({
            type: 'line',
            data: data,
            options: {
                tension: 0.5,
                transitions: {
                    show: {
                        animations: {
                            x: {
                                from: 0
                            },
                            y: {
                                from: 0
                            }
                        }
                    },
                    hide: {
                        animations: {
                            x: {
                                to: 0
                            },
                            y: {
                                to: 0
                            }
                        }
                    }
                }
            }
        });
        const url = await chart.getShortUrl();
        message.channel.send(`${url}`)

    }
}