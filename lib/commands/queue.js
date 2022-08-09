module.exports = {
    name: 'queue',
    alias: ['q', 'qp'],
    howto: `${config.prefix}queue [page:opt]`,
    desc: 'Check or see the queue tracks list',
    async exec (msg, args, content) {
        var queue = await music.getQueue(msg.guild.id);
        if (!queue || !queue.playing) return msg.channel.send (':x: | No music currently playing.');
        if (!args) args[0] = 1;

        var page = [];
        page['start'] = 10 * (Number(args[0])-1)
        page['end'] = page['start'] + 10;

        var current = await queue.nowPlaying();
        var tracks = queue.tracks.map ((x, y)=>{
            return `\`${(y+1).toString().padStart(2, '0')}\` | \`${x.title.slice(0, 45)}\``
        });

        var embed = new MessageEmbed();

        embed.setTitle (':page_with_curl: | Server queue');
        embed.setDescription (tracks.join('\n') || '`00 | Your queue are empty. Add more tracks.`');
        embed.addFields ({
            name: 'Now playing',
            value: current.title,
            inline: false
        });
        embed.setFooter({
            text: `Requested by: ${queue.metadata.requested.tag}`,
            iconURL: queue.metadata.requested.displayAvatarURL()
        });
        embed.setColor(config.embedcolor);

        return msg.channel.send({ embeds: [embed]});
    }
}