const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();


client.on('ready', () => { // client (botumuz) hazır olduğunda
  client.user.setActivity('Counter-Strike Global Offensive', { type: "PLAYING"}); // oynuyor kısmını "Seninle" yapsın
  console.log(`Hazırım!`); // konsola "Hazırım" yazsın
});
client.on("guildMemberAdd", member => {
    member.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC');

    //member.guild.defaultChannel.sendMessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
})
client.on("guildMemberRemove", member => {
    member.send(' Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC ');

    //member.guild.defaultChannel.sendMessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
})


client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'sa') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'as') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hb') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hg') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'oç') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'partner') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'tmm') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'nasılsınız') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hoşgeldin') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hoşbuldum') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hmm') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'tmm') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'partner olalımmı') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'by') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'ben gidiom') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'self bot') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'amk') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'aq') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hm') {
message.author.send('Hey Sen! \nSeni ***__Simba__*** Krallığına Davet Ediyorum!:point_right:  https://discord.gg/p5PSTYC')
  }
})
client.on("guildCreate", guild => {
  console.log(`Yeni sunucuya katıldım: ${guild.name}\n. Bu sunucu ${guild.memberCount} üye!`);
});
client.on("guildDelete", guild => {
  console.log(`Hey beni çıkardılar ;(: ${guild.name}`);
});



client.login("process.env.BOT_TOKEN");
