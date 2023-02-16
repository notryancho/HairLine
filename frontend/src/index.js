import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { getImagesByTag } from './utils/api';



const displayImages = async (tag) => {
  try {
    const images = await getImagesByTag(tag); // get the filtered images
    const imageList = document.querySelector('.image-list');
    imageList.innerHTML = '';
    images.forEach((image) => {
      const img = document.createElement('img');
      img.src = image.imageUrl;
      img.alt = image.name;
      imageList.appendChild(img);
    });
  } catch (err) {
    console.error(err);
  }
};

const tagButtons = document.querySelectorAll('.tag-button');
tagButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const tag = event.target.dataset.tag;
    displayImages(tag);
  });
});

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );



