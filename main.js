require('dotenv').config();
//config database
/*import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = process.env.FIREBASECONFIG;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);*/


//config discord bot
const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = 'fc!';
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

    if (!msg.content.startsWith(PREFIX)) {   
        return
    };

    const args = msg.content;
    const command = args.substr(4,args.length);
    //const command = args.shift().toLocaleLowerCase();
  if (command === 'todos') {
      msg.channel.send(JSON.stringify(cumples))
  }
  if (command.startsWith('cumple')) {
      let nombre = command.split(' ')[1];
      console.log(nombre)
      let fecha = cumples[nombre];
      console.log(fecha);
      if (fecha === undefined) {
         msg.channel.send('No se cuando cumple 😭');
      }else {
        msg.channel.send(fecha);  
      }
      
  }
  if(command === 'help'){
    msg.channel.send('hoy cumple - dice quien cumple hoy');
    msg.channel.send('todos - todos los cumpleaños'); 
    msg.channel.send('cumple [nombre] - dice cuando cumple');

  }
  if (command === 'hoy cumple') {
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
      if (cumplenHoy.length === 0) {
          msg.channel.send('Hoy no cumple nadie 😥');
      }
      else {
        msg.channel.send(cumplenHoy);  
      }
      
  }
});



client.login(process.env.TOKEN);