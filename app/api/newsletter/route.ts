import { put, get } from "@vercel/blob";

interface NewsletterSubscriber {
  email: string;
  subscribedAt: string;
}

const BLOB_KEY = "newsletter-subscribers.json";

// Read existing subscribers from Blob
async function getSubscribers(): Promise<NewsletterSubscriber[]> {
  try {
    const result = await get(BLOB_KEY, {
      access: "private",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
    if (result && result.statusCode === 200) {
      const reader = result.stream.getReader();
      const { value } = await reader.read();
      if (value) {
        const text = new TextDecoder().decode(value);
        return JSON.parse(text);
      }
    }
  } catch (error) {
    console.error("Error reading newsletter data from Blob:", error);
  }
  return [];
}

// Save subscribers to Blob
async function saveSubscribers(
  subscribers: NewsletterSubscriber[]
): Promise<void> {
  try {
    await put(BLOB_KEY, JSON.stringify(subscribers, null, 2), {
      access: "private",
      contentType: "application/json",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
  } catch (error) {
    console.error("Error saving newsletter data to Blob:", error);
    throw error;
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

    const subscribers = await getSubscribers();

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

    await saveSubscribers(subscribers);

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
    const subscribers = await getSubscribers();
    return Response.json({
      count: subscribers.length,
      subscribers: subscribers,
    });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return Response.json(
      { error: "Failed to fetch subscriber count" },
      { status: 500 }
    );
  }
}
