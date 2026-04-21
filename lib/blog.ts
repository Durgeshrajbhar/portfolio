import fs from "fs";
import path from "path";

export interface BlogMeta {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
  tags?: string[];
}

export interface Blog extends BlogMeta {
  content: string;
}

function getBlogsDirectory(): string {
  // Try multiple possible paths
  const possiblePaths = [
    path.join(process.cwd(), "public/blogs"),
    path.join(process.cwd(), "portfolio", "public/blogs"),
    path.join(__dirname, "..", "public/blogs"),
  ];

  for (const dirPath of possiblePaths) {
    if (fs.existsSync(dirPath)) {
      return dirPath;
    }
  }

  // Default fallback
  return path.join(process.cwd(), "public/blogs");
}

const blogsDirectory = getBlogsDirectory();

function parseBlogFile(filePath: string): Blog | null {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const lines = fileContents.split("\n");

    // Parse frontmatter (JSON between ---)
    if (lines[0].trim() !== "---") {
      console.error(`Invalid frontmatter start in ${filePath}`);
      return null;
    }

    let endIndex = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === "---") {
        endIndex = i;
        break;
      }
    }

    if (endIndex === -1) {
      console.error(`No closing frontmatter marker in ${filePath}`);
      return null;
    }

    const metaStr = lines.slice(1, endIndex).join("\n").trim();
    
    if (!metaStr) {
      console.error(`Empty frontmatter in ${filePath}`);
      return null;
    }

    const meta = JSON.parse(metaStr) as BlogMeta;
    
    // Validate required fields
    if (!meta.title || !meta.slug || !meta.date || !meta.author || !meta.excerpt) {
      console.error(`Missing required frontmatter fields in ${filePath}`);
      return null;
    }

    const content = lines.slice(endIndex + 1).join("\n").trim();

    return { ...meta, content };
  } catch (error) {
    console.error(`Error parsing blog file: ${filePath}`, error);
    return null;
  }
}

export function getAllBlogs(): Blog[] {
  try {
    const files = fs.readdirSync(blogsDirectory).filter((file) => file.endsWith(".md"));

    const blogs = files
      .map((file) => parseBlogFile(path.join(blogsDirectory, file)))
      .filter((blog): blog is Blog => blog !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return blogs;
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}

export function getBlogBySlug(slug: string): Blog | null {
  try {
    const filePath = path.join(blogsDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    return parseBlogFile(filePath);
  } catch (error) {
    console.error(`Error reading blog: ${slug}`, error);
    return null;
  }
}

export function getBlogMetadata(): BlogMeta[] {
  return getAllBlogs().map(({ content, ...meta }) => meta);
}
