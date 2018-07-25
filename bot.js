const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send({embed: {
    color: 3447003,
    author: {
      name: Sunucuma Davetlisin,
      icon_url: cdn.discordapp.com/attachments/468018438338641921/471408598879043594/JPEG_20180723_094842.jpg
    },
    title: "Sunucumuzda Sana İhtiyacımız Var",
    url: "https://discord.gg/Ee7hBtV",
    description: "Sunucumuza Gelip Bizi Desteklermisin",
    fields: [{
        name: "Sunucumuzda Her Hafta Çekiliş Oluyor Sende Katılmalısın!!",
        value: "Örnek Olarak Steam Key,Steam Premium Key vs."
      },
      {
        
        name: "Eğer Sunucumuza Gelirsen @Recep | Fides'i Etiketle Sana Bir Kıyağı Olacaktır"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Recep | Fides https://discord.gg/Ee7hBtV"
    }
  }
})

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
    member.send('**İçerde Güzel Bir Ortam Var Ve Her Hafta 1 Çekiliş Oluyor Kaçırmayın Derim.** https://discord.gg/Ee7hBtV');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
   
});



bot.on('ready',()=> {
console.log('Recep Fides Self Bot Bağlandı');

});

bot.login(process.env.BOT_TOKEN);
