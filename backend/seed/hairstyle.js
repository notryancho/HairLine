const mongoose = require('mongoose');
const Image = require('./models/Image');

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hairline', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const images = [
  {
    name: 'Wavy Short',
    url: 'https://i.imgur.com/udyC7em.png',
    tags: ['wavy']
  },
  {
    name: 'Wavy Medium',
    img: 'https://i.imgur.com/jDi5otR.png',
    tags: ['wavy']
  },
  {
    name: 'Wavy Long',
    img: 'https://i.imgur.com/EHGBaX4.png',
    tags: ['wavy'],
  },
  {
    name: 'Thin Short',
    img: 'https://i.imgur.com/5N1jlIt.png',
    tags: ['thin'],
  },
  {
    name: 'Thin Medium',
    img: 'https://i.imgur.com/BA2afIo.png',
    tags: ['thin'],
  },
  {
    name: 'Thin Medium',
    img: 'https://i.imgur.com/8Ei9sWu.png',
    tags: ['thin'],
  },
  {
    name: 'Thick Short',
    img: 'https://i.imgur.com/NlerdLe.png',
    tags: ['thick'],
  },
  {
    name: 'Thick Medium',
    img: 'https://i.imgur.com/0iR4MK4.png',
    tags: ['thick'],
  },
  {
    name: 'Thick Long',
    img: 'https://i.imgur.com/TwPs86T.png',
    tags: ['thick'],
  },
  {
    name: 'Fine Short',
    img: 'https://i.imgur.com/HmPs0RD.png',
    tags: ['fine'],
  },
  {
    name: 'Fine Medium',
    img: 'https://i.imgur.com/7mODHpU.png',
    tags: ['fine'],
  },
  {
    name: 'Fine Long',
    img: 'https://i.imgur.com/7MtPC4h.png',
    tags: ['fine'],
  },
  {
    name: 'Afro Short',
    img: 'https://i.imgur.com/eTIWAsx.png',
    tags: ['afro'],
  },
  {
    name: 'Afro Medium',
    img: 'https://i.imgur.com/Vcldxp0.png',
    tags: ['afro'],
  },
  {
    name: 'Afro Long',
    img: 'https://i.imgur.com/C1gFMpj.png',
    tags: ['afro'],
  },
  
  
  
];


Image.create(images)
  .then(() => {
    console.log('Images seeded successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
