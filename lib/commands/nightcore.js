module.exports = {
    name: 'nightcore',
    alias: ['nc'],
    howto: `${config.prefix}nightcore`,
    desc: 'Add effect nightcore',
    async exec (msg, args, content) {
        var queue = music.getQueue (msg.guild.id);
        if (!queue || !queue.playing) return msg.channel.send (':x: | No music currently playing.');

        await queue.setFilters({
            nightcore: !queue.getFiltersEnabled().includes('nightcore'),
            normalizer2: !queue.getFiltersEnabled().includes('nightcore')
        })
        return msg.channel.send (':clock3: | Adding nightcore, please wait...');
    }
}