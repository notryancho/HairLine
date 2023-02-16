
const express = require('express');
const app = express();

const hairtypes = [
  
    { 
        name: 'Thick Short',
        url: 'https://i.imgur.com/NlerdLe.png'
    },
    { 
        name: 'Thick Medium',
        url: 'https://i.imgur.com/0iR4MK4.png'
    }, 
    { 
        name: 'Thick Long',
        url: 'https://i.imgur.com/TwPs86T.png'
    }, 
    { 
        name: 'Thin Short',
        url: 'https://i.imgur.com/5N1jlIt.png'
    }, 
    { 
        name: 'Thin Medium',
        url: 'https://i.imgur.com/8Ei9sWu.png'
    }, 
    { 
        name: 'Thin Medium 2',
        url: 'https://i.imgur.com/BA2afIo.png'
    }, 
    { 
        name: 'Wavy Short',
        url: 'https://i.imgur.com/udyC7em.png'
    }, 
    { 
        name: 'Wavy Medium',
        url: 'https://i.imgur.com/jDi5otR.png'
    }, 
    { 
        name: 'Wavy Long',
        url: 'https://i.imgur.com/EHGBaX4.png'
    }, 
    { 
        name: 'Fine Short',
        url: 'https://i.imgur.com/HmPs0RD.png'
    }, 
    { 
        name: 'Fine Medium',
        url: 'https://i.imgur.com/7mODHpU.png'
    },
    { 
        name: 'Fine Long',
        url: 'https://i.imgur.com/7MtPC4h.png'
    },
    { 
        name: 'Afro Short',
        url: 'https://i.imgur.com/eTIWAsx.png'
    },
    { 
        name: 'Afro Medium',
        url: 'https://i.imgur.com/Vcldxp0.png'
    },
    { 
        name: 'Afro Long',
        url: 'https://i.imgur.com/C1gFMpj.png'
    },
  ]

app.get('/api/images', (req, res) => {
  const { tag } = req.query;
  const filteredImages = hairtypes.filter((hairtype) => hairtype.tags.includes(tag));
  const imageUrls = filteredImages.map(image => image.url);
  res.json(imageUrls);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});