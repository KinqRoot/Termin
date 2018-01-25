const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    $sa = "\n Schularbeiten: ' + '\n' + 'Derzeit keine Schularbeiten vorhanden.";
    $tests = "\n Tests/Wiederholungen: ' + '\n' + 'Derzeit keine Tests vorhanden.";
    if (message.content === '!sa') {
    	message.reply($sa);
  	}
    if (message.content === '!test') {
    	message.reply($tests);
  	}
    if (message.content === '!termall') {
    	message.reply($sa .  "\n" .  $tests)
                 

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
