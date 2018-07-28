const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('```Bu Sunucuyu Sevdiysen Bizim Sunucuyuda Gelirmisin İçerde Güzel Bir Ortam Var Ve Her Hafta 1 Çekiliş Oluyor Kaçırmayın Derim.``` https://discord.gg/JdXv4m5 ```Kayıt Olmayı Sakın Unutmayın.``` https://media.giphy.com/media/oWjyixDbWuAk8/giphy.gif');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
   
});



bot.on('guildMemberRemove', member=>{
    member.send('```Sunucudan Gidiyorsun Madem Bizim Sunucuyuda Gelirmisin İçerde Güzel Bir Ortam Var Ve Her Hafta 1 Çekiliş Oluyor Kaçırmayın Derim.``` https://discord.gg/JdXv4m5 ```Kayıt Olmayı Sakın Unutmayın.``` https://media.giphy.com/media/oWjyixDbWuAk8/giphy.gif');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
   
});



bot.on('ready',()=> {
console.log('Recep Fides Self Bot Bağlandı');

});

bot.login(process.env.BOT_TOKEN);
