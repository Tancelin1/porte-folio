'use client';
import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="markdown-content text-wrap">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
