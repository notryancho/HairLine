const express = require('express');
const app = express();


const images = [
  { tags: ['thick'], url: 'https://i.imgur.com/NlerdLe.png'},
  { tags: ['thick'], url: 'https://i.imgur.com/0iR4MK4.png'},
  { tags: ['thick'], url: 'https://i.imgur.com/TwPs86T.png'},
  { tags: ['thin'], url: 'https://i.imgur.com/5N1jlIt.png' },
  { tags: ['thin'], url: 'https://i.imgur.com/8Ei9sWu.png' },
  { tags: ['thin'], url: 'https://i.imgur.com/BA2afIo.png' },
  { tags: ['wavy'], url: 'https://i.imgur.com/udyC7em.png' },
  { tags: ['wavy'], url: 'https://i.imgur.com/jDi5otR.png' },
  { tags: ['wavy'], url: 'https://i.imgur.com/EHGBaX4.png' },
  { tags: ['fine'], url: 'https://i.imgur.com/HmPs0RD.png' },
  { tags: ['fine'], url: 'https://i.imgur.com/7mODHpU.png' },
  { tags: ['fine'], url: 'https://i.imgur.com/7MtPC4h.png' },
  { tags: ['afro'], url: 'https://i.imgur.com/eTIWAsx.png' },
  { tags: ['afro'], url: 'https://i.imgur.com/Vcldxp0.png' },
  { tags: ['afro'], url: 'https://i.imgur.com/C1gFMpj.png' },
];


app.get('/api/images', (req, res) => {
  const { tag } = req.query;
  const filteredImages = images.filter(image => image.tags.includes(tag));
  const imageUrls = filteredImages.map(image => image.url);
  res.json(imageUrls);
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
