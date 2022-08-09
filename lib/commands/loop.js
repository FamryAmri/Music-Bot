const { QueueRepeatMode } = require ('discord-player');

module.exports = {
    name: 'loop',
    alias: ['repeat', 'rp', 'lp', 'r', 'l'],
    desc: 'Auto replay or loop your tracks.',
    howto: `${config.prefix}loop [all|single|one]`,
    async exec (msg, args, content) {
        var queue = music.getQueue(msg.guild.id);
        if (!queue || !queue.playing) return msg.channel.send (':x: | No music currently playing.');
            var loop;
        if (content == 'all'){
            if (queue.repeatMode == 0 || queue.repeatMode == 1) {
                loop = 'to all tracks | :repeat:'
                queue.setRepeatMode (QueueRepeatMode.QUEUE);
            } else {
                loop = 'has been off'
                queue.setRepeatMode (QueueRepeatMode.OFF);
            }
        } else if (content == 'one' || content == 'single') {
            if (queue.repeatMode == 0 || queue.repeatMode == 2) {
                loop = 'to single track | :repeat_one:'
                queue.setRepeatMode (QueueRepeatMode.TRACK);
            } else {
                loop = 'has been off'
                queue.setRepeatMode (QueueRepeatMode.OFF);
            }
        } else {
            if (queue.repeatMode !==0) {
                loop = 'has been off'
                queue.setRepeatMode (QueueRepeatMode.OFF);
            } else {
                loop = 'to single track | :repeat_one:'
                queue.setRepeatMode (QueueRepeatMode.TRACK);
            }
        }
        return msg.channel.send ('Loop ' + loop);
    }
}