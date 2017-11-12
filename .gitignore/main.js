const discord = require('discord.js')
const bot = new discord.Client()

bot.login('Mzc5MzIyMjQyNDY4ODA2NjU3.DOoW8A.BmxWtmNDMauYNH2QmDkYIHX6esI')

bot.on('message', function (message) {
    if (message.content === 'ping') {
        message.channel.send('pong')
    }
})

bot.on('message', function (message) {
    if (message.content === 'qui est ton createur') {
        message.channel.send('darken')
    }
})

bot.on('message', function (message) {
    if (message.content === 'slt gros rageux') {
        message.reply('tu sais pas ecrire ou quoi on ecris salut pas slt')
    }
})

bot.on('message', function (message) {
    if (message.content === 'salut gros rageux') {
        message.reply('tu sais pas ecrire ou quoi on ecris salutation pas salut')
    }
})

bot.on('message', function (message) {
    if (message.content === 'cc gros rageux') {
        message.reply('tu sais pas ecrire ou quoi on ecris coucou pas cc')
    }
})

bot.on('message', function (message) {
    if (message.content === 'coucou gros rageux') {
        message.reply('bah voula c mieu')
    }
})

bot.on('message', function (message) {
    if (message.content === 'salutation gros rageux') {
        message.reply('bah voila c mieu')
    }
})
