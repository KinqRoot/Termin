const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!sa') {
    	message.reply('\n Schularbeiten: ' + '\n' + 'Derzeit keine Schularbeiten vorhanden.');
  	}
    if (message.content === '!test') {
    	message.reply('\n Tests/Wiederholungen: ' + '\n' + 'Netzwerktechnik: 15.1.2018 \n ITP2: 19.1.2018');
  	}
    if (message.content === '!termall') {
    	message.reply('\n Schularbeiten: ' + '\n' + 'Derzeit keine Schularbeiten vorhanden. \n \n Tests/Wiederholungen: \n Netzwerktechnik: 15.1.2018 \n ITP2: 19.1.2018')
                 

  	}
    if (message.content === '!termhelp'){
        message.reply('\n Termin Befehle: \n !sa Zeigt die Schularbeiten an \n !test Zeigt die Tests an \n !termall Zeigt alle Termine an');
    }
    if (message.content === '@Termin#5708'){
        message.reply('ey, will nix chattn mit dir.');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
