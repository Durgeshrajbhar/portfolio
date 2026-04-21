import { put, get } from "@vercel/blob";

interface ContactMessage {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

const BLOB_KEY = "contact-messages.json";

// Read existing messages from Blob
async function getMessages(): Promise<ContactMessage[]> {
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
    console.error("Error reading contact data from Blob:", error);
  }
  return [];
}

// Save messages to Blob
async function saveMessages(messages: ContactMessage[]): Promise<void> {
  try {
    await put(BLOB_KEY, JSON.stringify(messages, null, 2), {
      access: "private",
      contentType: "application/json",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });
  } catch (error) {
    console.error("Error saving contact data to Blob:", error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return Response.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    const messages = await getMessages();

    // Add new message
    messages.push({
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    await saveMessages(messages);

    return Response.json(
      { message: "Message sent successfully", email },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await getMessages();
    return Response.json({
      count: messages.length,
      messages: messages,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
