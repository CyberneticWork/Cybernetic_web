import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ReactMarkdown from "react-markdown";

interface Message {
  id: string;
  text: string;
  sender: "user" | "hr";
  timestamp: Date;
}
// const [isFullScreen, setIsFullScreen] = useState(false);

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
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
      // Call backend multi-agent endpoint
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: newMessage }),
      });

      const data = await res.json();
      const hrMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response, // Multi-agent response
        sender: "hr",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, hrMessage]);
    } catch (error) {
      console.error(error);
      const hrMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: "Sorry, I'm having trouble responding. Please try again later.",
        sender: "hr",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, hrMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full btn-gradient shadow-glow z-50 hover:scale-110 transition-transform
    sm:w-14 sm:h-14
    w-12 h-12
    "
        size="icon"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
    fixed bottom-24 right-6
    w-96 h-[400px]
    sm:w-96 sm:h-[400px]
    w-[95vw] h-[60vh]
    max-w-full
    glass rounded-2xl shadow-glass z-40 flex flex-col chat-window
    "
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">HR Support</h3>
                <p className="text-xs text-muted-foreground text-white/80">
                  Chat with our HR team
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Maximize Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("/chat", "_blank")}
                className="h-8 w-8 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
              </Button>

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } chat-appear`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-gradient-primary text-primary-foreground"
                      : "glass border border-border/20"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.sender === "hr" && (
                      <Bot className="w-4 h-4 mt-1 text-primary" />
                    )}
                    {message.sender === "user" && (
                      <User className="w-4 h-4 mt-1 text-primary-foreground" />
                    )}
                    <div className="flex-1">
                      {message.sender === "hr" ? (
                        <div className="text-white prose prose-sm max-w-none prose-p:leading-relaxed prose-li:marker:text-white prose-a:text-blue-600 prose-a:underline">
                          <ReactMarkdown
                            components={{
                              strong: ({ node, ...props }) => (
                                <strong
                                  className="text-white font-bold"
                                  {...props}
                                />
                              ),
                              a: ({ node, ...props }) => (
                                <a
                                  className="text-blue-600 underline"
                                  {...props}
                                />
                              ),
                            }}
                          >
                            {message.text}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed">
                          {message.text}
                        </p>
                      )}
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start chat-appear">
                <div className="glass border border-border/20 rounded-2xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-primary" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce animation-delay-200"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t border-border/20"
          >
            <div className="flex gap-2 flex-col sm:flex-row">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 glass border-border/50 focus:border-primary"
              />
              <Button
                type="submit"
                size="icon"
                className="btn-gradient mt-2 sm:mt-0"
                disabled={!newMessage.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LiveChat;
