import { Row, Col } from 'react-bootstrap';
import ProjectCard from '@/components/ProjectCard';
import { promises as fs } from 'fs';
import path from 'path';

export default async function Projets() {
  const filePath = path.join(process.cwd(), 'locale/fr', 'projets.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  const projets = JSON.parse(fileContent);

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
