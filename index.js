const { Client, Message } = require('discord.js-selfbot-v13');

const client = new Client({
    checkUpdate: false
    });

    client.on('ready', async () => {
        console.log('Mario is ready');
        });

        client.on('messageCreate', async (Message) => {
            if (Message.content.toLowerCase() === "test") {
                Message.reply("test ok")
            }
        });

        client.login("MTE5NjU1NTQzOTkzMjk2NDg5NQ.G4tYGt.64nStD53HJPZgksdYH5WZbyusjgLQHOK8yLqxI");