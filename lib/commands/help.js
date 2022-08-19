module.exports = {
    name: 'help',
    alias: ['h', 'hp'],
    howto: `${config.prefix}help [commands]`,
    desc: 'Getting commands information or manual',
    async exec (msg, args, content){
        const embed = new MessageEmbed();

        if (args.length==0){
            embed.setDescription (`For more info: check ${config.prefix}help [commands]`);
            embed.addFields ({
                name: 'commands list', 
                value: commands.map(x => x.name).join(', '),
                inline: false
            });
        } else {
            if (!commands.has(args[0])) return msg.channel.send (':x: | Command not found.');
            var cmdinfo = commands.get (args[0]);
            
            embed.setDescription (cmdinfo.desc);
            embed.addFields({
                name: cmdinfo.name,
                value: `Aliases: \`${cmdinfo.alias.join(', ') || ' - '}\`\nUsage: \`${cmdinfo.howto}\``,
                inline: false
            });
        }
        
        embed.setFooter({
            text: `Requested by: ${msg.author.tag}`,
            iconURL: msg.author.displayAvatarURL()
        });
        embed.setColor(config.embedcolor);
        
        return msg.channel.send({ embeds: [embed] });
    }
}