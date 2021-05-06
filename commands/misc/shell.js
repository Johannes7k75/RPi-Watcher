const process = require('child_process');
//code is shitty
module.exports = {
    name: 'shell',
    description: 'Use Shell/CMD/Terminal Command Via Discord.',
    aliases: ['terminal', 'cmd'],
    
    run: async({message, args, client, prefix}) => {

        const msg = await message.channel.send({embed: {
            title: 'Running Shell Command.',
            description: "Please wait, 2 Second⏲.",
            color: 'RANDOM'
        }})

        msg.delete({timeout: 2000});

        process.exec(args.join(" "), (error, stdout) => { let result = (stdout || error)
        message.channel.send(result, {code: "asciidoc", split: '\n'}).catch(err => message.channel.send({embed: {
            title: "Error was Found.",
            color: "RED",
            description: `${err}`
        }}))
        })
    }
}