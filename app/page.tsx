'use client';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="display-4 mb-4">Bienvenue sur mon Portfolio</h1>
          <p className="lead">Je m'appelle Tancelin Navez, j'ai 22 ans</p>
          <p className="mt-4">
            Découvrez mon parcours, mes projets et n'hésitez pas à me contacter !
          </p>
          <div className="mt-5">
            <Link href="/presentation" passHref legacyBehavior>
              <Button variant="primary" size="lg" className="me-3">
                En savoir plus
              </Button>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Button variant="outline-primary" size="lg">
                Me contacter
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}