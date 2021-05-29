require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
var cumples = {
    'adri' : '7 de enero',
    'thomi' : '28 de marzo',
    'lauti' : '29 de mayo',
    'motti' : '29 de mayo',
    'agus' : '29 de mayo',
    'juan perez' : '29 de mayo',
    'shilua' : '22 de junio',
    'luquitas' : '27 de junio',
    'enzo' : '10 de julio',
    'peluche' : '3 de septiembre',
    'jefe' : '13 de septiembre',
    'pablito' : '4 de diciembre'
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
 
  if (msg.content === 'cumples') {
      msg.channel.send(JSON.stringify(cumples))
  }
  if (msg.content.startsWith('cumple')) {
      let nombre = msg.content.split(' ')[1];
      let fecha = cumples[nombre];
      msg.channel.send(fecha);
  }
  if (msg.content === 'hoy cumple') {
      let months = [
          'enero',
          'febrero',
          'marzo',
          'abril',
          'mayo',
          'junio',
          'julio',
          'agosto',
          'septiembre',
          'octubre',
          'noviembre',
          'diciembre'
      ];
      let date = new Date();
      let day = date.getDate();
      let month = months[date.getMonth()];
      let today = day + ' de ' + month;
      let cumplenHoy = [];
      for (let cumple in cumples) {
          if (cumples[cumple] === today) {
              cumplenHoy.push(`${cumple} ✨🎁`)
          }
      }
      msg.channel.send(cumplenHoy);
  }
});



client.login(process.env.TOKEN);