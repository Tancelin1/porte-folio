'use client';
import { Card, Button } from 'react-bootstrap';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="mb-3">
          {technologies.map((tech, index) => (
            <span key={index} className="badge bg-primary me-2">{tech}</span>
          ))}
        </div>
        {link && (
          <Button variant="outline-primary" href={link} target="_blank">
            Voir le projet
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
