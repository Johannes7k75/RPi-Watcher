const Commando = require('discord.js-commando')
const { ChartJSNodeCanvas } = require('chartjs-node-canvas')
const { MessageAttachment } = require('discord.js')

const data = require('../../config/data.chart.json')

console.log('barke1')
const members = []
const dates = []

for (const item of data) {
    members.push(item.members)
    dates.push(item.date)
}

const width = 800
const height = 600
const chartCallback = (ChartJS) => {
    ChartJS.plugins.register({
        beforeDraw: (chartInstance) => {
            const { chart } = chartInstance
            const { ctx } = chart
            ctx.fillStyle = 'white'
            ctx.fillRect(0, 0, chart.width, chart.height)
        },
    })
}

module.exports = class ChartCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'chart',
            group: 'misc',
            memberName: 'chart',
            description: 'Displays a chart',
        })
    }

    run = async (message) => {
        const canvas = new ChartJSNodeCanvas(width, height, chartCallback)

        const configuration = {
            type: 'bar',
            data: {
                labels: dates,
                datasets: [
                    {
                        label: 'Discord Members',
                        data: members,
                        backgroundColor: '#7289d9',
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }

        const image = await canvas.renderToBuffer(configuration)

        const attachment = new MessageAttachment(image)

        message.channel.send(attachment)
    }
}