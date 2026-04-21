import fs from "fs";
import path from "path";

interface ContactMessage {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json");

// Ensure data directory exists
function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Read existing messages
function getMessages(): ContactMessage[] {
  ensureDataDir();
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading contact data:", error);
  }
  return [];
}

// Save messages
function saveMessages(messages: ContactMessage[]) {
  ensureDataDir();
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));
  } catch (error) {
    console.error("Error saving contact data:", error);
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

    const messages = getMessages();

    // Add new message
    messages.push({
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    saveMessages(messages);

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
    const messages = getMessages();
    return Response.json({ 
      count: messages.length,
      messages: messages
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
