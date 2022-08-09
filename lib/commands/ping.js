module.exports = {
    name: 'ping',
    alias: [],
    desc: 'Taking a response from music player',
    howto: `${config.prefix}ping`,
    async exec(msg){
        return msg.channel.send('Pong!');
    }
}