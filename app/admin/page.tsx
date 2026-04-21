"use client";

import { useEffect, useState } from "react";
import { Mail, MessageSquare } from "lucide-react";

interface ContactMessage {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

interface NewsletterSubscriber {
  email: string;
  subscribedAt: string;
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch contacts
      const contactsRes = await fetch("/api/contact");
      if (contactsRes.ok) {
        const contactsData = await contactsRes.json();
        setContacts(contactsData.messages || []);
      }

      // Fetch newsletter subscribers
      const subscribersRes = await fetch("/api/newsletter");
      if (subscribersRes.ok) {
        const subscribersData = await subscribersRes.json();
        setSubscribers(subscribersData.subscribers || []);
      }
    } catch (error) {
      console.error("[v0] Error fetching admin data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-10 max-w-6xl mx-auto">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-12">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Messages */}
        <div className="bg-[#111] rounded-2xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary">
              Contact Messages ({contacts.length})
            </h2>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {contacts.length === 0 ? (
              <p className="text-gray-400">No messages yet</p>
            ) : (
              contacts.map((contact, i) => (
                <div
                  key={i}
                  className="bg-black p-4 rounded-lg border border-gray-800"
                >
                  <p className="font-semibold text-primary">{contact.name}</p>
                  <p className="text-sm text-gray-400">{contact.email}</p>
                  <p className="text-sm text-gray-300 mt-2">{contact.message}</p>
                  <p className="text-xs text-gray-600 mt-2">
                    {new Date(contact.submittedAt).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Newsletter Subscribers */}
        <div className="bg-[#111] rounded-2xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-primary">
              Newsletter Subscribers ({subscribers.length})
            </h2>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {subscribers.length === 0 ? (
              <p className="text-gray-400">No subscribers yet</p>
            ) : (
              subscribers.map((sub, i) => (
                <div
                  key={i}
                  className="bg-black p-3 rounded-lg border border-gray-800 flex justify-between items-center"
                >
                  <div>
                    <p className="text-white">{sub.email}</p>
                    <p className="text-xs text-gray-600">
                      {new Date(sub.subscribedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
