# Blog System Documentation

## Overview
The blog system uses markdown files stored in `/public/blogs/` that can be updated after deployment without requiring a rebuild.

## How to Add a New Blog Post

1. Create a new `.md` file in `/public/blogs/` directory
   - Example: `my-blog-post.md`

2. Add JSON frontmatter at the top of the file:
```
---
{
  "title": "My Blog Title",
  "date": "2026-04-20",
  "author": "Your Name",
  "excerpt": "A brief description of your blog post",
  "slug": "my-blog-post",
  "tags": ["tag1", "tag2", "tag3"]
}
---
```

3. Write your blog content in markdown below the frontmatter

## File Format Example

```markdown
---
{
  "title": "Building with Next.js",
  "date": "2026-04-20",
  "author": "Durgesh Rajbhar",
  "excerpt": "Learn Next.js best practices",
  "slug": "nextjs-guide",
  "tags": ["nextjs", "tutorial"]
}
---

# Main Heading

Your content here...

## Sub Heading

More content...
```

## Supported Markdown Features

- Headings (h1-h6)
- Bold, italic, and code formatting
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Blockquotes
- Links

## Automatic Features

- Blogs are **automatically sorted by date** (newest first)
- Reading time is **automatically calculated**
- Blog posts are **automatically indexed**
- No rebuild needed - just add files to `/public/blogs/`

## Important Notes

- `slug` must be unique and match the filename (without .md)
- `date` format: YYYY-MM-DD
- After adding a new blog, just refresh the page - no deployment needed!
- The `/api/blogs` endpoint provides metadata for the blog list
- The `/api/blogs/[slug]` endpoint provides full blog content
