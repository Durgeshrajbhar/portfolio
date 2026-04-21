'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface Blog {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
  tags?: string[];
  content: string;
}

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/blogs/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Blog not found');
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen p-8">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
          ← Back to Blogs
        </Link>
        <div className="text-gray-400">Error: {error || 'Blog not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <Link href="/blog" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
        ← Back to Blogs
      </Link>

      <article className="max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {blog.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
            <span>By {blog.author}</span>
            <span>{formatDate(blog.date)}</span>
            <span>{Math.ceil(blog.content.split(/\s+/).length / 200)} min read</span>
          </div>
          {blog.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {blog.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-800 text-blue-400 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
              p: ({ node, ...props }) => <p className="text-gray-300 mb-4 leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
              li: ({ node, ...props }) => <li className="text-gray-300 ml-4" {...props} />,
              code: ({ node, inline, ...props }) =>
                inline ? (
                  <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm" {...props} />
                ) : (
                  <code className="bg-gray-800 text-gray-100 p-4 rounded block mb-4 overflow-x-auto" {...props} />
                ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4" {...props} />
              ),
              a: ({ node, ...props }) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
