import MarkdownContent from '@/components/MarkdownContent';
import { promises as fs } from 'fs';
import path from 'path';

export default async function Histoire() {
  const filePath = path.join(process.cwd(), 'locale/fr', 'histoire.md');
  const content = await fs.readFile(filePath, 'utf8');

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Mon Histoire</h1>
      <MarkdownContent content={content} />
    </div>
  );
}
