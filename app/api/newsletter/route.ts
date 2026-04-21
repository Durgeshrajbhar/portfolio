import fs from "fs";
import path from "path";

interface NewsletterSubscriber {
  email: string;
  subscribedAt: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "newsletter.json");

// Ensure data directory exists
function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Read existing subscribers
function getSubscribers(): NewsletterSubscriber[] {
  ensureDataDir();
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading newsletter data:", error);
  }
  return [];
}

// Save subscribers
function saveSubscribers(subscribers: NewsletterSubscriber[]) {
  ensureDataDir();
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(subscribers, null, 2));
  } catch (error) {
    console.error("Error saving newsletter data:", error);
  }
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const subscribers = getSubscribers();

    // Check if already subscribed
    if (subscribers.some((sub) => sub.email === email)) {
      return Response.json(
        { error: "Email already subscribed" },
        { status: 400 }
      );
    }

    // Add new subscriber
    subscribers.push({
      email,
      subscribedAt: new Date().toISOString(),
    });

    saveSubscribers(subscribers);

    return Response.json(
      { message: "Successfully subscribed to newsletter", email },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);
    return Response.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const subscribers = getSubscribers();
    return Response.json({ 
      count: subscribers.length,
      subscribers: subscribers
    });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return Response.json(
      { error: "Failed to fetch subscriber count" },
      { status: 500 }
    );
  }
}
