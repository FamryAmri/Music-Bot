const { Client } = require ('discord.js');
const { Player } = require ('discord-player');

// global | public variable
global.client = new Client ({
    intents: [
        "Guilds",
        "GuildMessages",
        "GuildMembers",
        "GuildVoiceStates",
        "MessageContent"
    ]
});

// all modules
require ('./lib/misc')
require ('./lib/cores')

