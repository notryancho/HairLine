import React from 'react';
import Nav from '../components/Nav';

const Browse = () => {
  return (
    <div>
      {window.location.pathname !== '/' && <Nav />}
      <h1>Browse</h1>
      
    </div>
  );
}

export default Browse;