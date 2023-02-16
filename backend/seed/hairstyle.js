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
    img: '/hairstyles/wavyshort.png',
    tags: ['wavy']
  },
  {
    name: 'Wavy Medium',
    img: '/hairstyles/wavymed.png',
    tags: ['wavy']
  },
  {
    name: 'Wavy Long',
    img: '/hairstyles/wavymed.png',
    tags: ['wavy'],
  },
  {
    name: 'Thin Short',
    img: '/hairstyles/thinshort.png',
    tags: ['thin'],
  },
  {
    name: 'Thin Medium',
    img: '/hairstyles/thinmedd.png',
    tags: ['thin'],
  },
  {
    name: 'Thin Medium',
    img: '/hairstyles/thinmed.png',
    tags: ['thin'],
  },
  {
    name: 'Thick Short',
    img: '/hairstyles/thickshort.png',
    tags: ['thick'],
  },
  {
    name: 'Thick Medium',
    img: '/hairstyles/thickmed.png',
    tags: ['thick'],
  },
  {
    name: 'Thick Long',
    img: '/hairstyles/thicklong.png',
    tags: ['thick'],
  },
  {
    name: 'Fine Short',
    img: '/hairstyles/fineshort.png',
    tags: ['fine'],
  },
  {
    name: 'Fine Medium',
    img: '/hairstyles/finemed.png',
    tags: ['fine'],
  },
  {
    name: 'Fine Long',
    img: '/hairstyles/finelong.png',
    tags: ['fine'],
  },
  {
    name: 'Afro Short',
    img: '/hairstyles/afroshort.png',
    tags: ['afro'],
  },
  {
    name: 'Afro Medium',
    img: '/hairstyles/afromed.png',
    tags: ['afro'],
  },
  {
    name: 'Afro Long',
    img: '/hairstyles/afrolong.png',
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
