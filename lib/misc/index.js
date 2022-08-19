const { EmbedBuilder } = require('@discordjs/builders');

global.config = require ('./config');
global.commands = require ('./commands');
global.progress = require ('./progress');
global.MinToSec = require ('./mintosec');
global.MessageEmbed = EmbedBuilder;
global.timeping = require ('./timeping')
global.os = require('./os')