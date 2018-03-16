const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '495840444:AAFRtW5xR9Yl4XOHothbpGTzgoKm6AvDdLs'
const bot = new TelegramBot(TOKEN, {
    polling:true
})

const KB = {
    curency: 'Курс валюты',
    picture: 'Картинка',
    cat: 'Котик',
    car: 'Машина',
    back: 'Назад'
}
bot.onText(/\/start/, msg => {
    sendGreeting(msg)
})
bot.on('message', msg => {
    switch (msg.text){
        case KB.picture:
            sendPictureScreen(msg.chat.id)
            break
        case KB.curency:
            break
        case KB.back:
            sendGreeting(msg, false)
            break
        case KB.cat:
        case KB.car:
            break
    }
})

function sendPictureScreen(chatId){
    bot.sendMessage(chatId, `Выберете тип картинки`,{
        reply_markup: {
            keyboard:[
                [KB.car, KB.cat],
                [KB.back]
            ]
        }
    })
}

function sendGreeting(msg, sayHello = true){
    const text = sayHello
       ? `Привет, ${msg.from.first_name}\nЧто вы хотите сделать?`
       : `Что вы хотите сделать?`


    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            keyboard:[
                [KB.curency, KB.picture]
            ]
        }
    })
}