const Discord = require('discord.js');
const { token } = require('./auth.json');
//Import the Discord.js library and auth.json

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Started');
});

client.on('message', message => {
    if (message.content === 'avatar') {
        const embed = new Discord.MessageEmbed()
        .setTitle('Avatar')
        .setThumbnail(message.author.avatarURL())
        .setDescription(message.member.toString() + ('\`s Avatar'));

        return message.channel.send(embed);

    }
})
client.login(token)