import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

const AgentDashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [reply, setReply] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("https://your-backend.com"); // Change to your backend URL
    setSocket(newSocket);

    // Receive messages from customers
    newSocket.on("receive_message", (msg: { text: string; sender: string }) => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: msg.text,
          sender: msg.sender === "agent" ? "agent" : "user",
          timestamp: new Date(),
        },
      ]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reply.trim() || !socket) return;

    // Send reply to customer
    socket.emit("send_message", {
      text: reply,
      sender: "agent",
    });

    // Add to local UI
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: reply,
        sender: "agent",
        timestamp: new Date(),
      },
    ]);

    setReply("");
  };

  return (
    <div className="p-6 max-w-lg mx-auto border rounded-xl shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-4">Agent Dashboard</h2>

      <div className="h-80 overflow-y-auto border p-3 rounded-lg mb-3 bg-gray-50">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`mb-2 p-2 rounded-lg max-w-[80%] ${
              m.sender === "agent"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300 text-black"
            }`}
          >
            <p>{m.text}</p>
            <span className="text-xs opacity-70">
              {m.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={sendReply} className="flex gap-2">
        <Input
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Type a reply..."
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default AgentDashboard;
