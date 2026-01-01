
'use client';
import { Container, Card, Row, Col } from 'react-bootstrap';

export default function Contact() {
  return (
    <Container className="mt-4">
      <h1 className="mb-4">Contact</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Me contacter</Card.Title>
              <Card.Text>
                <strong>Téléphone :</strong> <a href="tel:0650654735">06 50 65 47 35</a>
              </Card.Text>
              <Card.Text>
                <strong>Email :</strong> <a href="mailto:tancelinnavez@outlook.fr">tancelinnavez@outlook.fr</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}