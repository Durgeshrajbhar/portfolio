import { NextResponse } from 'next/server';
import { getBlogMetadata } from '@/lib/blog';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const blogs = getBlogMetadata();
    console.log('Fetched blogs:', blogs.length);
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs', details: String(error) }, { status: 500 });
  }
}
