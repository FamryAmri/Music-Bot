module.exports = {
    name: 'np',
    alias: ['nowplaying', 'nply'],
    howto: `${config.prefix}np`,
    desc: '',
    async exec (msg, args, content) {
        var queue = music.getQueue (msg.guild.id);
        if (!queue || !queue.playing) return msg.channel.send (':x: | No music currently playing.');

        var timeplayer = queue.getPlayerTimestamp();

        var prog = progress (MinToSec(timeplayer.current), MinToSec(timeplayer.end));
        var track = queue.nowPlaying();
        
        var embed = new MessageEmbed();
        embed.setTitle(':arrow_forward: | Now playing');
        embed.setDescription(`${track.title}`);
        embed.addFields ({
            name: `Progress | (${timeplayer.current}/${timeplayer.end})`,
            value: `\`${prog}\``,
            inline: false
        });
        embed.setColor(config.embedcolor);
        embed.setFooter({
            text: `requested By: ${queue.metadata.requested.tag}`,
            iconURL: queue.metadata.requested.displayAvatarURL()
        });

        return msg.channel.send ({ embeds: [embed]});
    }
}