'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BlogMeta {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
  tags?: string[];
}

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => {
        if (!res.ok) {
          console.error('API response not ok:', res.status, res.statusText);
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Blogs loaded:', data);
        setBlogs(data);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setError(error.message || 'Failed to load blogs');
        setLoading(false);
      });
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen p-8 sm:p-10">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl mb-2 font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Research & Blogs
        </h1>
        <p className="text-gray-400 text-lg">Thoughts on web development, performance, and technology</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-400 py-12">Loading blogs...</div>
      ) : error ? (
        <div className="text-center text-red-400 py-12">Error: {error}</div>
      ) : blogs.length === 0 ? (
        <div className="text-center text-gray-400 py-12">No blogs yet. Check back soon!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 h-full flex flex-col"
            >
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                  {blog.title}
                </h2>
                
                <p className="text-gray-400 mb-4 flex-grow line-clamp-3 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gradient-to-r from-blue-900 to-purple-900 text-blue-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 2 && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                        +{blog.tags.length - 2} more
                      </span>
                    )}
                  </div>
                )}

                <div className="border-t border-gray-700 pt-4 mb-4">
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                    <span>By {blog.author}</span>
                    <span>{formatDate(blog.date)}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="w-full inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300 transform group-hover:scale-105 text-center"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
