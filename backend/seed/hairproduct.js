const db = require('../db')
const HairProduct = require('../models/hairproduct')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const hairproducts = 
    [
    {
        name: 'Moraccan Oil',
        url: 'https://i.imgur.com/QVbJ6Ui.png',
        tags: ['afro']
  },
    {
        name: 'Invati Men',
        url: 'https://i.imgur.com/flbkuf8.png',
        tags: ['thin']
  },
    {
        name: 'Catwalk',
        url: 'https://i.imgur.com/XcnffOm.png',
        tags: ['wavy']
  },
    {
        name: 'Redken',
        url: 'https://i.imgur.com/vxhh4T3.png',
        tags: ['fine']
  },
    {
        name: 'Styling Paste',
        url: 'https://i.imgur.com/eujxDCu.png',
        tags: ['thick']
  }
    ]
    await HairProduct.insertMany(hairproducts)
    console.log('I think we it work again!')
}

const run = async () => {
    await main()
    db.close()
}

run() 