
export const getImagesByTag = async (tag) => {
    try {
      const res = await axios.get(`/api/images?tag=${tag}`); // send the tag as a query parameter
      return res.data;
    } catch (err) {
      throw err;
    }
  }
  
  // in client/src/index.js
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
      displayImages(tag); // display the filtered images when a tag button is clicked
    });
  });
  