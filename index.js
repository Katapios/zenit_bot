const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '558506472:AAG-_Bkh-9zVUxk-DIVrvSjYiNoWYaWGkY8'

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from Добрый день, " HI, ${msg.from.first_name}"')
})