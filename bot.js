const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('**Biz Büyümekte Olan Bir Discord Sunucusuyuz** https://discord.gg/Ee7hBtV');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
    member.send('**:heart:SELAMIN ALEYKÜM :heart:! 
:pray: Senin için özel bir davetim var :pray: 
:cherry_blossom: Sohbet, Oyun, Müzik, ve Eğlencenin bolca bulunduğu sunucumuza katılmaya ne dersin? :cherry_blossom: 
:fire:  Sende katılırsan ailemiz 1 kişi daha büyüyecek. :fire:
:heart: Ve gerçekten seni aramızda görmekten mutluluk duyuyor olacağız[KARŞILIKLI OLABİLİR]. <3
:arrow_down:  :lollipop: DAVET LİNKİ :lollipop: :arrow_down: 
https://discord.gg/Ee7hBtV');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
   
});



bot.on('ready',()=> {
console.log('Recep Fides Self Bot Bağlandı');

});

bot.login(process.env.BOT_TOKEN);
