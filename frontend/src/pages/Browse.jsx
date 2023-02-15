import React from 'react';
import Nav from '../components/Nav';
import { Card, Col, Row } from 'react-bootstrap';

const Browse = () => {
  return (
    <div>
      {window.location.pathname !== '/' && <Nav />}
      <h1>Browse Hairstyles</h1>
      <Row xs={1} md={2} lg={3} className="hairstyles-gallery">
        <Col>
          <Card>
            <Card.Img variant="top" src="/hairstyles/wavyshort.png" alt="wavyshort" />
            <Card.Body>
              <Card.Title>Wavy Short</Card.Title>
              <Card.Text>
                Photo taken from FASHIONBEAN.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="/hairstyles/wavymed.png" alt="wavy med" />
            <Card.Body>
              <Card.Title>Wavy Medium</Card.Title>
              <Card.Text>
                Photo taken from FASHIONBEAN.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="/hairstyles/wavylong.png" alt="wavy long" />
            <Card.Body>
              <Card.Title>Wavy Long</Card.Title>
              <Card.Text>
                Photo taken from FASHIONBEAN.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </div>
  );
}

export default Browse;