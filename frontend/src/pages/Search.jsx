// import React, { Component } from "react";
// import Nav from "../components/Nav";


// const Search = () => { 


//   const handleTagClick = (tag) => {
   
//   };

//   return (
//     <div>
//       {window.location.pathname !== "/" && <Nav />}
//       <h1>Search</h1>
//       <div>
//         <button onClick={() => handleTagClick("thick")}>Thick</button>
//         <button onClick={() => handleTagClick("thin")}>Thin</button>
//         <button onClick={() => handleTagClick("wavy")}>Wavy</button>
//         <button onClick={() => handleTagClick("fine")}>Fine</button>
//         <button onClick={() => handleTagClick("afro")}>Afro</button>
//       </div>
//       <div>
        
//       </div>
//     </div>
//   )
// };

// export default Search;

import React, { useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";

const Search = () => { 
  const [imageUrls, setImageUrls] = useState([]);

  const handleTagClick = (tag) => {
    axios.get(`/api/images?tag=${tag}`)
      .then(res => {
        setImageUrls(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      {window.location.pathname !== "/" && <Nav />}
      <h1>Search</h1>
      <div>
        <button onClick={() => handleTagClick("thick")}>Thick</button>
        <button onClick={() => handleTagClick("thin")}>Thin</button>
        <button onClick={() => handleTagClick("wavy")}>Wavy</button>
        <button onClick={() => handleTagClick("fine")}>Fine</button>
        <button onClick={() => handleTagClick("afro")}>Afro</button>
      </div>
      <div>
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt="" />
        ))}
      </div>
    </div>
  )
};

export default Search;




