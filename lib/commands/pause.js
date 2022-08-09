module.exports = {
    name: 'pause',
    alias: ['ps', 'replay', 'resume'],
    howto: `${config.prefix}.pause`,
    desc: 'Pausing the track. Use it again to replay or resume.',
    async exec (msg, args, content){
        var queue = music.getQueue (msg.guild.id);
        if (!queue || !queue.playing) return msg.channel.send (':x: | No music currently playing.');
        var st = await queue.setPaused(true);

        if (!st) {
            await queue.setPaused (false);
            return msg.channel.send(':arrow_forward: | Resumed.')
        } else { 
            return msg.channel.send(':pause_button: | Paused.');
        }
    }
}