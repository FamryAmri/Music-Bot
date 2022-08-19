module.exports = {
    name: 'join',
    alias: ['connect'],
    howto: `${config.prefix}join [#channels | channel-id]`,
    desc: 'Joining or connect in voice channel.',
    async exec (msg, args, content) {

        var queue = music.getQueue (msg.guild.id);
        if (queue !==undefined) return msg.channel.send(':x: | Already in voice channel.');

        queue = music.createQueue (msg.guild, {
            metadata: {
                    channel: msg.channel,
                    requested: msg.author
                }
        });

        try {
            
            if (!queue.connection) await queue.connect (msg.member.voice.channel);
            return msg.react('✅');
        } catch {
            await music.deleteQueue (msg.guild.id);
            return msg.channel.send (':x: | Permissions denied, i could not join in your voice channel.');
        }
    }
}