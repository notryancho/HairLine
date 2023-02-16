const express = require('express');
const app = express();

const hairstyles = [
  { tags: ['thickshort'], url: 'https://i.imgur.com/NlerdLe.png' },
  { tags: ['thickmed'], url: 'https://i.imgur.com/0iR4MK4.png' },
  { tags: ['thicklong'], url: 'https://i.imgur.com/TwPs86T.png' },
  { tags: ['thinshort'], url: 'https://i.imgur.com/5N1jlIt.png' },
  { tags: ['thinmed'], url: 'https://i.imgur.com/8Ei9sWu.png' },
  { tags: ['thinlong'], url: 'https://i.imgur.com/BA2afIo.png' },
  { tags: ['wavyshort'], url: 'https://i.imgur.com/udyC7em.png' },
  { tags: ['wavymed'], url: 'https://i.imgur.com/jDi5otR.png' },
  { tags: ['wavylong'], url: 'https://i.imgur.com/EHGBaX4.png' },
  { tags: ['fineshort'], url: 'https://i.imgur.com/HmPs0RD.png' },
  { tags: ['finemedd'], url: 'https://i.imgur.com/7mODHpU.png' },
  { tags: ['finemed'], url: 'https://i.imgur.com/7MtPC4h.png' },
  { tags: ['afroshort'], url: 'https://i.imgur.com/eTIWAsx.png' },
  { tags: ['afromed'], url: 'https://i.imgur.com/Vcldxp0.png' },
  { tags: ['afrolong'], url: 'https://i.imgur.com/C1gFMpj.png' },
];

app.get('/api/images', (req, res) => {
  const { tag } = req.query;
  const filteredImages = hairstyles.filter((hairstyle) => hairstyle.tags.includes(tag));
  const imageUrls = filteredImages.map(image => image.url);
  res.json(imageUrls);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
