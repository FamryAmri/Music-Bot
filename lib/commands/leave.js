module.exports = {
    name: 'leave',
    alias: ['disconnect'],
    howto: `${config.prefix}leave`,
    desc: 'Leaving or disconnect from voice channel.',
    async exec (msg, args, content) {
        var queue = music.getQueue (msg.guild.id);
        if (!queue.connection) return msg.channel.send (':x: | Not in voice channel.');
        queue.destroy();
        music.deleteQueue (msg.guild.id);
        
        return msg.react ('✅');
    }
}