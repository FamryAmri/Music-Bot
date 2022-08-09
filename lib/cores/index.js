const { Player } = require ('discord-player');

global.music = new Player (client, config.discord_player);

music.on ('trackStart', (queue, track) => {
    var embed = new MessageEmbed();
    embed.setTitle(':arrow_forward: | Now playing');
    embed.setDescription(`${track.title}`)
    embed.setFooter({
        text: `Requested by: ${queue.metadata.requested.tag}`,
        iconURL: queue.metadata.requested.displayAvatarURL()
    });
    if (queue.getFiltersEnabled().length!==0) embed.addFields ({
        name: 'Filters enabled',
        value: `\`${queue.getFiltersEnabled().join(', ')}\``
    })
    embed.setColor(config.embedcolor);

    queue.metadata.channel.send ({ embeds: [embed] });
});

music.on ('trackAdd', (queue, track) => {
    if (!queue.playing) return queue.metadata.channel.send (':clock3: | Preparing your queue..')
    var embed = new MessageEmbed();
    embed.setTitle(':arrow_forward: | Successfully added in queue');
    embed.setDescription(`${track.title}`)
    embed.setFooter({
        text: `Added by: ${queue.metadata.requested.tag}`,
        iconURL: queue.metadata.requested.displayAvatarURL()
    });
    embed.setColor(config.embedcolor);

    return queue.metadata.channel.send ({ embeds: [embed] });
});

client.on ('ready', ()=> {
    console.log(`Login as ${client.user.tag}`);
    // console.log(commands)
});

client.on ('messageCreate', msg => {
    if (!msg.content.toLowerCase().startsWith(config.prefix)) return;
    var cmdargs = msg.content.split (" ");
    var cmdname = cmdargs[0].slice (config.prefix.length);
    var cmdcontent = msg.content.slice (cmdargs[0].length + 1);
    cmdargs = cmdargs.slice(1);

    var cmd = commands.get (cmdname) || commands.find(x => x.alias && x.alias.includes(cmdname));
    if (cmd) return cmd.exec(msg, cmdargs, cmdcontent);
    return;
});

client.login (config.token);