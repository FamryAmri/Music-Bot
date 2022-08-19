module.exports = {
    name: 'stop',
    alias: ['stp', 'sp'],
    howto: `${config.prefix}stop`,
    desc: 'Stop a music',
    async exec(msg, args, content) {
        var queue = await music.getQueue(msg.guild.id);
        if (!queue || !queue.playing) return msg.channel.send (':x: | No music currently playing.');
        queue.destroy();
        return msg.react ('✅');
    }
}