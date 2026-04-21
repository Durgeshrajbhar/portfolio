# Newsletter & Contact System

## Overview
Your portfolio now includes fully functional newsletter signup and contact form systems that persist data.

## Features

### Newsletter Signup
- **Location**: `/about` page (bottom left section)
- **Data Storage**: Stored in `data/newsletter.json`
- **Features**:
  - Email validation
  - Duplicate prevention (same email can't subscribe twice)
  - Subscriber count tracking
  - Success/error messages

### Contact Form
- **Location**: `/about` page (bottom right section)
- **Data Storage**: Stored in `data/contacts.json`
- **Features**:
  - Name, email, and message fields
  - Message length validation (minimum 10 characters)
  - Email validation
  - Timestamp tracking
  - Success/error messages

## API Endpoints

### Newsletter API
**POST** `/api/newsletter`
- Subscribe to newsletter
- Request body: `{ "email": "user@example.com" }`
- Response: `{ "message": "Successfully subscribed to newsletter", "email": "..." }`

**GET** `/api/newsletter`
- Get all subscribers and count
- Response: `{ "count": number, "subscribers": [...] }`

### Contact API
**POST** `/api/contact`
- Submit a contact message
- Request body: `{ "name": "...", "email": "...", "message": "..." }`
- Response: `{ "message": "Message sent successfully", "email": "..." }`

**GET** `/api/contact`
- Get all messages and count
- Response: `{ "count": number, "messages": [...] }`

## Admin Dashboard

Access the admin dashboard at `/admin` to view:
- **All contact messages** with names, emails, and submission timestamps
- **All newsletter subscribers** with subscription timestamps

This page helps you manage and monitor all incoming submissions and subscriptions.

## Data Storage

Data is automatically saved to JSON files in the `data/` directory:
- `data/newsletter.json` - Newsletter subscribers
- `data/contacts.json` - Contact messages

The directory is automatically created when the first submission is received.

## User Experience

### Newsletter Signup
1. User enters email
2. Click "Subscribe"
3. Shows "Subscribing..." while processing
4. On success: "Thanks for subscribing!" and form clears
5. On error: Shows error message (e.g., "Email already subscribed")

### Contact Form
1. User fills name, email, and message
2. Click "Send Message"
3. Shows "Sending..." while processing
4. On success: "Message sent! I'll get back to you soon." and form clears
5. On error: Shows error message

## Error Handling

Both forms include validation:
- **Newsletter**: Valid email format required
- **Contact**: Name, email, and message (min 10 chars) all required
- **Email**: Must be valid format with @ symbol
- **Duplicate prevention**: Can't subscribe same email twice

## Testing the System

1. Visit `/about` page
2. Test newsletter signup with a valid email
3. Test contact form with your details
4. Visit `/admin` to see your submissions
5. Refresh `/admin` page to verify data persists

## Notes

- Data is stored locally in JSON format
- For production, consider migrating to a database (Supabase, MongoDB, etc.)
- No email is currently sent to users or admin (backend notification system can be added)
