module.exports = {
    name: 'bassboost',
    alias: ['bb', 'bass'],
    howto: `${config.prefix}bassboost [low|high|null]`,
    desc: 'Add effect bassboost',
    async exec (msg, args, content) {
        var queue = music.getQueue (msg.guild.id);
        if (!queue || !queue.playing) return msg.channel.send (':x: | No music currently playing.');
        await queue.setFilters({
            bassboost: !queue.getFiltersEnabled().includes('bassboost_low'),
            normalizer2: !queue.getFiltersEnabled().includes('bassboost_low')
        })
        return msg.channel.send (':clock3: | Adding bassboost, please wait...');
    }
}