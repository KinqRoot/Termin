const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDAwMzU4NDYyODMzNTU3NTE2.DTaefA.8W8V93CqlRPYCJ05S5v28AmMTrQ);
