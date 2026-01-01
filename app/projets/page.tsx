'use client';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from '@/components/ProjectCard';
import { useState, useEffect } from 'react';

export default function Projets() {
  const [projets, setProjets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/projets.json')
      .then(res => res.json())
      .then(data => {
        setProjets(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur chargement projets:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mt-4"><p>Chargement...</p></div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Mes Projets</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projets.map((projet: any, index: number) => (
          <Col key={index}>
            <ProjectCard {...projet} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
