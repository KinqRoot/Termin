const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!sa') {
    	message.reply('Schularbeiten: || Mathe: 11.1.2018');
  	}
    if (message.content === '!test') {
    	message.reply('Tests/Wiederholungen: || Deutsch: 10.1.2018 || Netzwerktechnik: 15.1.2018 || ITP2: 19.1.2018');
  	}
    if (message.content === '!termall') {
    	message.reply('Schularbeiten: || Mathe: 11.1.2018 \n Tests/Wiederholungen: || Deutsch: 10.1.2018 || Netzwerktechnik: 15.1.2018 || ITP2: 19.1.2018`)
                 

  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
