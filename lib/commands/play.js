const { QueryType } = require ('discord-player');

module.exports = {
    name: 'play',
    alias: ['p', 'ply'],
    decs: 'Play or add a track (into queue).',
    howto: `${config.prefix}play [value-search|url]`,
    async exec (msg, args, content) {
        if (!msg.member.voice.channelId) return msg.channel.send (':x: | You are not in a voice channel.');

        
        var query = await music.search(content, {
            requestedBy: msg.author,
            searchEngine: QueryType.AUTO
        });
        
        if (!query || !query.tracks.length) return msg.channel.send (':x: | Your search could not be found.');;

        var queue = music.createQueue (msg.guild, {
            metadata: {
                    channel: msg.channel,
                    requested: msg.author
                }
        });

        try {
            if (!queue.connection) await queue.connect (msg.member.voice.channel);
        } catch {
            await music.deleteQueue (msg.guild.id);
            return msg.channel.send (':x: | Permissions denied, i could not join in your voice channel.');
        }

        query.playlist ? queue.addTracks(query.tracks) : queue.addTrack(query.tracks[0]);
        if (!queue.playing) await queue.play();
    }
}