const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('Red')
.addField(' Bot Komutları',`
**!uye** : Kayıt Etme
**!nick** : Nick Değiştirme
**!say** : Sunucudaki Üye Grafiğini Atar
**!dmduyur** : Sunucudaki Tüm Kullanıcılara Dm Den Mesaj Yollarsınız
**!duyuru** : Belirtilen Kanala Duyuru Atarsınız
**!kilit ** : Sohbeti İstediğiniz Süre Boyunca Kilitler
**!sohbet aç** : Sohbeti Açar
**!sohbet kapat** : Sohbet Kapat'`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/736477829163647026/959616881860415589/BUYUK_V.jpg')
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yardım"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
