const os = require("../misc/os");

module.exports = {
    name: 'os-spec',
    alias: ['os'],
    desc: 'Checking specifications on this hosting.',
    howto: `${config.prefix}os-spec`,
    async exec (msg) {
        var embed = new MessageEmbed();

        embed.setTitle ('Specification');
        embed.addFields ({
            name: 'CPU',
            value: os.cpus(),
            inline: false
        }, {
            name: 'Memory',
            value: os.memory(),
            inline: true
        }, {
            name: 'OS',
            value: os.platform(),
            inline: true
        });

        embed.setFooter({
            text: `Requested by: ${msg.author.tag}`,
            iconURL: msg.author.displayAvatarURL()
        });
        embed.setColor (config.embedcolor);

        return msg.channel.send({ embeds: [embed]})
    }
}