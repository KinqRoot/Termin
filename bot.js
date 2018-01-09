const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!sa') {
    	message.reply('Schularbeiten: \n Mathe: 11.1.2018');
  	}
    if (message.content === '!test') {
    	message.reply('Tests/Wiederholungen: \n Deutsch: 10.1.2018 \n Netzwerktechnik: 15.1.2018 \n ITP2: 19.1.2018');
  	}
    if (message.content === '!termall') {
    	message.reply('Schularbeiten: \n Mathe: 11.1.2018 \n \n Tests/Wiederholungen: \n Deutsch: 10.1.2018 \n Netzwerktechnik: 15.1.2018 \n ITP2: 19.1.2018')
                 

  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
