module.exports = {
    name: 'ping',
    alias: [],
    desc: 'Taking a response from music player',
    howto: `${config.prefix}ping`,
    async exec(msg){
        var embed = new MessageEmbed();

        var load = await msg.channel.send ('pinging...');
        var msgrespond = `${'Message'.padStart(9, ' ')}:${timeping.msgping (msg.createdTimestamp, load.createdTimestamp)},`;
        msgrespond += `Websocket:${timeping.wsping(client.ws.ping)}`

        var respond = msgrespond.split(',').join('\n');
        
        embed.setTitle ('Pong!');
        embed.addFields ({
            name: 'Response time',
            value: `\`\`\`${respond}\`\`\``,
            inline: false
        });

        embed.setFooter({
            text: `Requested by: ${msg.author.tag}`,
            iconURL: msg.author.displayAvatarURL()
        });
        embed.setColor (config.embedcolor);

        load.edit ({ embeds: [embed]});
    }
}