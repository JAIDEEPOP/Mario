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

        client.login("MTE5NjU1NTQzOTkzMjk2NDg5NQ.GR5LCG.WvDHKNK-6iGjV0CunrEqzx9ptlvjYzbGFtVJ3s");
