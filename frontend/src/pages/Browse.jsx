import React from 'react';
import Nav from '../components/Nav';
// import { Card, Col, Row } from 'react-bootstrap';

const Browse = () => {
  return (
    <div>
      {window.location.pathname !== '/' && <Nav />}
      <h1>Browse Hairstyles</h1>
      <img src="./hairstyles/afrolong.png" alt="thick hairstyle"></img>
    </div>

  );
}

export default Browse;