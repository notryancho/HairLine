const db = require('../db')
const mongoose = require('mongoose');
const Hairstyle = require('../models/hairstyle')

db.on('error', console.error.bind(console, 'MongoDB connection error'))
// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hairline', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const main = async () => {
    const hairstyles = [
  {
    name: 'Wavy Short',
    url: 'https://i.imgur.com/udyC7em.png',
    tags: ['wavy']
  },
  {
    name: 'Wavy Medium',
    url: 'https://i.imgur.com/jDi5otR.png',
    tags: ['wavy']
  },
  {
    name: 'Wavy Long',
    url: 'https://i.imgur.com/EHGBaX4.png',
    tags: ['wavy'],
  },
  {
    name: 'Thin Short',
    url: 'https://i.imgur.com/5N1jlIt.png',
    tags: ['thin'],
  },
  {
    name: 'Thin Medium',
    url: 'https://i.imgur.com/BA2afIo.png',
    tags: ['thin'],
  },
  {
    name: 'Thin Medium',
    url: 'https://i.imgur.com/8Ei9sWu.png',
    tags: ['thin'],
  },
  {
    name: 'Thick Short',
    url: 'https://i.imgur.com/NlerdLe.png',
    tags: ['thick'],
  },
  {
    name: 'Thick Medium',
    url: 'https://i.imgur.com/0iR4MK4.png',
    tags: ['thick'],
  },
  {
    name: 'Thick Long',
    url: 'https://i.imgur.com/TwPs86T.png',
    tags: ['thick'],
  },
  {
    name: 'Fine Short',
    url: 'https://i.imgur.com/HmPs0RD.png',
    tags: ['fine'],
  },
  {
    name: 'Fine Medium',
    url: 'https://i.imgur.com/7mODHpU.png',
    tags: ['fine'],
  },
  {
    name: 'Fine Long',
    url: 'https://i.imgur.com/7MtPC4h.png',
    tags: ['fine'],
  },
  {
    name: 'Afro Short',
    url: 'https://i.imgur.com/eTIWAsx.png',
    tags: ['afro'],
  },
  {
    name: 'Afro Medium',
    url: 'https://i.imgur.com/Vcldxp0.png',
    tags: ['afro'],
  },
  {
    name: 'Afro Long',
    url: 'https://i.imgur.com/C1gFMpj.png',
    tags: ['afro'],
  }

];
await Hairstyle.insertMany(hairstyles)
console.log('I made it work. I think.')
}

const run = async () => {
    await main () 
    db.close()
}

run()

