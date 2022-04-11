module.exports = {
    discord: {
        token: 'ODA4MDA3OTc5MjU2Nzc0NzM3.YCASEg.H8ZmakBi7W1kWlg4n3igqfVJqzQ',
        prefix: 'RPI!',
        activity: 'ACTIVITY',
        rpilogschannel: '842860583400374343',
        bot_owner_id: '587701169103699994',
    },
    embed: {
        color: {
            ready: '#6B8E96',
            help: '#E67E22',
            ip: '#00ff00',
            temp: {
                gt50: '#f54242', // Greater than 50°C
                st50: '#4281f5', // Smaller than 50°C
            },
            usage: {
                gt30: '#ad1ca9', // Greater than 30%
                st30: '#00ff00', // Smaller than 30%
            },
        },
    },
};
