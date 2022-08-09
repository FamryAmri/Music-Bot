module.exports = {
    bot: {
        token: '', // create .env file to protect your token from anyone or create a key on cp
        prefix: 'fs.',
    },
    embedcolor: [40, 255, 0], // green color
    opt: {
        discord_player: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
}