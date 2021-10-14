module.exports = {
    name: 'chart',
    aliases: ['ch'],
    category: 'Info',
    utilisation: '{prefix}chart',

    async execute(client, message, args) {
        const { CanvasRenderService } = require('chartjs-node-canvas');

        const data = require('../../other/data.json');
        console.log(data);
        const width = 1600
        const height = 1200
        let configuartion;
        if (args[0] === 'temp') {
            let temparr;
            if (data.temp.length >= 60) {
                temparr = data.temp.slice(Math.max(data.temp.length - 60, 0));
            } else { temparr = data.temp };

            let labelsarr = [];
            for (i = 1; i < 61; i++) {
                labelsarr.push(i);
            }
            const plugin = {
                beforeDraw: (chart) => {
                    const { ctx } = chart;
                    ctx.fillStyle = 'rgb(29, 29, 29)';
                    ctx.fillRect(0, 0, chart.width, chart.height);
                }
            };

            configuartion = {
                type: 'line',
                data: {
                    labels: labelsarr,
                    datasets: [
                        {
                            label: 'Temp Pi',
                            data: temparr,
                            fill: false,
                            borderColor: 'rgb(71, 82, 196)',
                            tension: 0.1,
                        }
                    ]
                },
                plugins: [plugin],

            };

        } else if (args[0] === 'usage') {
            let usagearr;
            if (data.usage.length >= 60) {
                usagearr = data.usage.slice(Math.max(data.usage.length - 60, 0));
            } else { usagearr = data.usage };

            let labelsarr = [];
            for (i = 1; i < 61; i++) {
                labelsarr.push(i);
            };

            const plugin = {
                beforeDraw: (chart) => {
                    const { ctx } = chart
                    ctx.fillStyle = 'rgb(29, 29, 29)'
                    ctx.fillRect(0, 0, chart.width, chart.height)
                }
            };
            configuartion = {
                type: 'line',
                data: {
                    labels: labelsarr,
                    datasets: [{
                        label: 'Usage Pi',
                        data: usagearr,
                        fill: false,
                        borderColor: 'rgb(71, 82, 196)',
                        tension: 0.1,

                    }]
                },
                plugins: [plugin],
                options: {
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: 'linear',
                            from: 1,
                            to: 0,
                            loop: true
                        }
                    },
                    scales: {
                        y: {
                            min: 0,
                            max: 100
                        }
                    }
                }
            };
        };



        const canvas = new CanvasRenderService(
            width,
            height,
        );

        const image = await canvas.renderToBuffer(configuartion);

        message.channel.send({ files: [{ attachment: image, name: 'chart.png' }] });
    }
};