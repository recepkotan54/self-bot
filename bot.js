const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('****İçerde Güzel Bir Ortam Var Ve Her Hafta 1 Çekiliş Oluyor Kaçırmayın Derim. https://discord.gg/Ee7hBtV**');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
    member.send('**İçerde Güzel Bir Ortam Var Ve Her Hafta 1 Çekiliş Oluyor Kaçırmayın Derim. https://discord.gg/Ee7hBtV**');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
   
});



bot.on('ready',()=> {
console.log('Recep Fides Self Bot Bağlandı');

});

bot.login(process.env.BOT_TOKEN);
