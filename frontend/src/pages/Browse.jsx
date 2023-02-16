import React from 'react';
import Nav from '../components/Nav';
// import { Card, Col, Row } from 'react-bootstrap';


const Browse = () => {
  return (
    <div>
      {window.location.pathname !== '/' && <Nav />}
      <h1>Browse Hairstyles</h1>
      <div className="gallery">
      
      <img src="https://i.imgur.com/udyC7em.png" alt="wavyshort" />
      <img src="https://i.imgur.com/jDi5otR.png" alt="wavymed" />
      <img src="https://i.imgur.com/EHGBaX4.png" alt="wavylong" />
      <img src="https://i.imgur.com/5N1jlIt.png" alt="thinshort" />
      <img src="https://i.imgur.com/8Ei9sWu.png" alt="thinmedd" />
      <img src="https://i.imgur.com/BA2afIo.png" alt="thinmed" />
      <img src="https://i.imgur.com/NlerdLe.png" alt="thickshort" />
      <img src="https://i.imgur.com/0iR4MK4.png" alt="thickmed" />
      <img src="https://i.imgur.com/TwPs86T.png" alt="thicklong" />
      <img src="https://i.imgur.com/HmPs0RD.png" alt="fineshort" />
      <img src="https://i.imgur.com/7mODHpU.png" alt="finemed" />
      <img src="https://i.imgur.com/7MtPC4h.png" alt="finelong" />
      <img src="https://i.imgur.com/eTIWAsx.png" alt="afroshort" />
      <img src="https://i.imgur.com/Vcldxp0.png" alt="afromed" />
      <img src="https://i.imgur.com/C1gFMpj.png" alt="afrolong" />

      </div>
    </div>

  );
}

export default Browse;