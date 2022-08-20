require ('dotenv/config')
var defaultconf = require ('../../config')

module.exports = {
    token: process.env.token || defaultconf.bot.token,
    prefix: defaultconf.bot.prefix || 'fs.',
    discord_player: defaultconf.opt.discord_player,
    embedcolor: defaultconf.embedcolor || [0,0,0],
    http: {
        port: process.env.PORT || defaultconf.http_server.port,
        enable: defaultconf.http_server.enable,
        content: defaultconf.http_server.content || 'OK'
    }
}