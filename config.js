module.exports = {
    bot: {
        token: '', // create .env file to protect your token from anyone or create a key on cp
        prefix: 'fs.', // prefix: [fs.]play
    },
    http_server: { // require 'npm i express'
        enable: false, // change to true to enable http server
        port: 8000, // in android might get error, use 8000 or execute as a root
        content: 'OK' // change content as you want 'html code also work'
    },
    embedcolor: [40, 255, 0], // green color
    opt: { // this optional: you can change it as you know what you doing
        discord_player: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
}