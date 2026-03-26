"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage: Message = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch {
      const errorMessage: Message = {
        role: "assistant",
        content: "Error getting response.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };
  
  return (
    <div className="fixed bottom-6 right-10 z-50 flex flex-col items-end gap-2">
      {/* Chat Button */}
      {!open && (
        <div className="pointer-events-auto">
          <button
            onClick={() => setOpen(true)}
            className="bg-brand-500 text-white p-4 rounded-full shadow-lg text-xl cursor-pointer hover:scale-110 transition"
          >
            Chat👍
          </button>
        </div>
      )}

      {/* Chat Window */}
      {open && (
        <div className="w-80 h-96 bg-white text-black rounded-xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center font-medium">
            Nexus Assistant
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer text-lg"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === "user" ? "text-right" : ""}>
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-brand-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()} // ✅ Enter key works
              className="flex-1 border rounded px-2 py-1 outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="Ask something..."
            />
            <button
              onClick={sendMessage}
              className="bg-brand-500 text-white px-3 rounded cursor-pointer hover:scale-105 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
