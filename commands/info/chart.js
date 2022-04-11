const QuickChart = require("quickchart-js");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: 'chart',
    aliases: ['ch'],
    category: 'Info',
    utilisation: '{prefix}chart',

    async execute(client, message, args) {
        const myChart = new QuickChart();
        const data = client.cache;
        console.log(data);
        myChart.setWidth(1600);
        myChart.setHeight(1200);
        myChart.setBackgroundColor('rgb(29, 29, 29)');

        let labelsarr = [];
        for (i = 2; i <= 60; i += 2) {
            labelsarr.push(i);
        };

        if (args[0] === 'temp') {
            myChart.setConfig({
                type: 'line',
                data: {
                    labels: labelsarr,
                    datasets: [
                        {
                            label: 'Temp Pi',
                            data: data.temp,
                            fill: false,
                            borderColor: 'rgb(71, 82, 196)',
                            tension: 0.1,
                        }
                    ]
                }
            });
            message.channel.send({ embeds: [new MessageEmbed().setTitle("Temp Chart").setImage(myChart.getUrl())] });
        } else if (args[0] === "usage") {


            message.channel.send({ embeds: [new MessageEmbed().setTitle("Usage Chart").setImage(myChart.getUrl())] });
        } else {
            const reactMessage = await message.channel.send({
                embeds: [new MessageEmbed().setTitle("Chart selection").setDescription("Please select a chart to view.")]
                , components: [new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("tempButton").setEmoji("🌡").setLabel("Temp Chart").setStyle("PRIMARY"),
                    new MessageButton().setCustomId("usageButton").setEmoji("💻").setLabel("Usage Chart").setStyle("PRIMARY"),
                ])]
            });

            reactMessage.createMessageComponentCollector(m => m.author.id === message.author.id, { time: 30000 }).on('collect', async (interaction, user) => {
                if (interaction.customId === "tempButton") {
                    interaction.message.edit({ embeds: [new MessageEmbed().setTitle("Temp Chart").setImage(getChart(myChart, data.temp, labelsarr, "Temp"))], components: [] });
                } else if (interaction.customId === "usageButton") {
                    interaction.message.edit({ embeds: [new MessageEmbed().setTitle("Usage Chart").setImage(getChart(myChart, data.usage, labelsarr, "Usage"))], components: [] });
                }
            }).on('end', collected => {
                if (collected.size === 0) {
                    reactMessage.edit({ embeds: [new MessageEmbed().setTitle("Chart selection").setDescription("No reactions were collected. Cancelling.")], components: [] });
                } else {
                    reactMessage.edit({ embeds: [new MessageEmbed().setTitle("Chart selection").setDescription("Reactions collected. Cancelling.")], components: [] });
                }
            });
        }


    }
};

function getChart(myChart, data, labelsarr, type) {
    myChart.setConfig({
        type: 'line',
        data: {
            labels: labelsarr,
            datasets: [{
                label: type + ' Pi',
                data: data,
                fill: false,
                borderColor: 'rgb(71, 82, 196)',
                tension: 0.1,

            }]
        }
    });

    return myChart.getUrl();
}