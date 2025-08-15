import { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  text: string;
  sender: "user" | "hr";
  timestamp: Date;
}

const ChatDashboard = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Cybernetic Technologies Pvt Ltd. You are now chatting with HR. How can we assist you?",
      sender: "hr",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    try {
      // ✅ Call Python FastAPI backend
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: newMessage }),
      });

      const data = await res.json();

      const hrMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "No response from server.",
        sender: "hr",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, hrMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          text: "Sorry, I'm having trouble responding. Please try again later.",
          sender: "hr",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e as any);
    }
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef]">
      <div className="w-full max-w-2xl h-[80vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-border/20">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-border/20 bg-gradient-to-r from-primary/80 to-primary/60">
          <div className="w-10 h-10 bg-black/90 rounded-full flex items-center justify-center shadow overflow-hidden">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-white">HR Support</h3>
            <p className="text-xs text-muted-foreground text-white/80">
              Chat with our HR team
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 bg-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex items-end gap-2 max-w-[80%]">
                {message.sender === "hr" && (
                  <div className="w-8 h-8 bg-black/80 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/logo.png"
                      alt="Company Logo"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                )}
                <div
                  className={`rounded-xl px-4 py-3 text-sm shadow ${
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  </div>
                  <div className="text-xs mt-1 opacity-60 text-right">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
                {message.sender === "user" && (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSendMessage}
          className="px-6 py-4 border-t border-border/20 bg-white"
        >
          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 border border-border/50 focus:border-primary rounded-xl"
              autoFocus
            />
            <Button
              type="submit"
              size="icon"
              className="btn-gradient"
              disabled={!newMessage.trim()}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatDashboard;
