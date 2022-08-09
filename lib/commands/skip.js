module.exports = {
    name: 'skip',
    alias: ['sk', 'next', 'nxt'],
    desc: 'Skip or next the tracks in the queue.',
    howto: `${config.prefix}skip`,
    async exec (msg, args, content){
        var queue = music.getQueue (msg.guild.id);

        if (!queue || !queue.playing) return msg.channel.send (':x: | No music currently playing.');
        await queue.skip();

        return msg.channel.send (':track_next: | Track skipped.');
    }
}