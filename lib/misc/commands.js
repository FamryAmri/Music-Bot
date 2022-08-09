const { Collection } = require ('@discordjs/collection');
const commands = new Collection();
const fs = require ('fs');

var cmds = fs.readdirSync(__dirname + '/../commands');

cmds.forEach(cmd => {
    on = require (__dirname + '/../commands/' + cmd)
    commands.set(on.name, on);
});

module.exports = commands;