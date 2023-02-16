import React, { useState } from 'react';
import axios from 'axios';

function ImageGallery() {
  const [images, setImages] = useState([]);

  const handleClick = () => {
    axios.get('/api/images', { params: { tag: 'thick' } })
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <button onClick={handleClick}>Show thick hair</button>
      <div>
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt="hair"/>
        ))}
      </div>
    </div>
  );
}
