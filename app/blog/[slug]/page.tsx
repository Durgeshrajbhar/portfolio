
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
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${slug}`);
        if (!res.ok) throw new Error('Blog not found');

        const data = await res.json();
        setBlog(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const readTime = blog?.content
    ? Math.ceil(blog.content.trim().split(/\s+/).length / 200)
    : 1;

  // 🔄 Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Loading blog...
      </div>
    );
  }

  // ❌ Error State
  if (error || !blog) {
    return (
      <div className="min-h-screen p-8">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
          ← Back to Blogs
        </Link>
        <p className="text-red-400">{error || 'Blog not found'}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-10">
      <Link href="/blog" className="text-blue-400 hover:text-blue-300 mb-6 inline-block">
        ← Back to Blogs
      </Link>

      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
            <span>By {blog.author}</span>
            <span>{formatDate(blog.date)}</span>
            <span>{readTime} min read</span>
          </div>

          {/* Tags */}
          {blog.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {blog.tags.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="text-xs bg-gray-800 text-blue-400 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: (props) => (
                <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
              ),
              h2: (props) => (
                <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
              ),
              h3: (props) => (
                <h3 className="text-xl font-bold mt-4 mb-2" {...props} />
              ),
              p: (props) => (
                <p className="text-gray-300 mb-4 leading-relaxed" {...props} />
              ),
              ul: (props) => (
                <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
              ),
              ol: (props) => (
                <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
              ),
              li: (props) => (
                <li className="text-gray-300 ml-4" {...props} />
              ),
              code: ({ inline, children, ...props }: any) =>
                inline ? (
                  <code
                    className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm"
                    {...props}
                  >
                    {children}
                  </code>
                ) : (
                  <code
                    className="bg-gray-800 text-gray-100 p-4 rounded block mb-4 overflow-x-auto"
                    {...props}
                  >
                    {children}
                  </code>
                ),
              blockquote: (props) => (
                <blockquote
                  className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4"
                  {...props}
                />
              ),
              a: (props) => (
                <a
                  className="text-blue-400 hover:text-blue-300 underline"
                  {...props}
                />
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
