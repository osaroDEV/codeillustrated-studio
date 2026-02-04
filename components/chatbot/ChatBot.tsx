"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
  Send,
  X,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
  timestamp: Date;
  options?: string[];
  links?: { label: string; url: string; icon?: React.ElementType }[];
};

const INITIAL_MESSAGE: Message = {
  id: "1",
  type: "bot",
  text: "Hello! I'm the Code Illustrated Studio assistant. How can I help you today?",
  timestamp: new Date(),
  options: [
    "What services do you offer?",
    "How much do projects cost?",
    "Can I see your previous work?",
    "How do I get started?",
    "Contact us directly",
  ],
};

const RESPONSES: Record<string, Partial<Message>> = {
  "What services do you offer?": {
    text: "We specialize in Digital Product Design, Web Development, Mobile Apps, and Brand Identity. We craft high-end digital experiences that impact the future.",
    options: [
      "Show me more services",
      "How do I get started?",
      "Back to main menu",
    ],
  },
  "How much do projects cost?": {
    text: "Project pricing varies based on complexity and scope. Small projects typically start from $500, while complex enterprise solutions are quoted individually. Would you like a custom quote?",
    links: [
      { label: "Request a Quote", url: "labs/contact", icon: ArrowUpRight },
      {
        label: "Chat on WhatsApp",
        url: "https://wa.me/447405786279",
        icon: Phone,
      },
    ],
    options: ["Back to main menu"],
  },
  "Can I see your previous work?": {
    text: "Absolutely! You can check out our portfolio of featured works on our website.",
    links: [{ label: "View Works", url: "labs/works", icon: ArrowUpRight }],
    options: ["Back to main menu"],
  },
  "How do I get started?": {
    text: "The best way to start is by booking a consultation or sending us your project brief. We'll get back to you within 24 hours.",
    links: [{ label: "Start a Project", url: "labs/contact", icon: ArrowUpRight }],
    options: ["Back to main menu"],
  },
  "Contact us directly": {
    text: "Sure! You can reach our team directly via WhatsApp or Email for a faster response.",
    links: [
      { label: "WhatsApp Us", url: "https://wa.me/447405786279", icon: Phone },
      {
        label: "Email Us",
        url: "mailto:admin@codeillustrated.com",
        icon: Mail,
      },
    ],
    options: ["Back to main menu"],
  },
  "Back to main menu": INITIAL_MESSAGE,
  "Show me more services": {
    text: "You can find a detailed breakdown of all our services including UI/UX Design & Visual Design on our services page.",
    links: [{ label: "Our Services", url: "labs/services", icon: ArrowUpRight }],
    options: ["Back to main menu"],
  },
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector(
        "[data-radix-scroll-area-viewport]",
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      text: option,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    // Bot response
    setIsTyping(true);
    setTimeout(() => {
      const response = RESPONSES[option] || {
        text: "I'm not sure about that. Would you like to speak with our team?",
        links: [
          {
            label: "WhatsApp Support",
            url: "https://wa.me/447405786279",
            icon: Phone,
          },
          {
            label: "Email Support",
            url: "mailto:admin@codeillustrated.com",
            icon: Mail,
          },
        ],
        options: ["Back to main menu"],
      };

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: response.text!,
        timestamp: new Date(),
        options: response.options,
        links: response.links,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setIsTyping(true);
    setTimeout(() => {
      // Simple keyword matching
      const text = userMsg.text.toLowerCase();
      let responseKey = "";

      if (
        text.includes("service") ||
        text.includes("offer") ||
        text.includes("do you do")
      )
        responseKey = "What services do you offer?";
      else if (
        text.includes("cost") ||
        text.includes("price") ||
        text.includes("pricing") ||
        text.includes("much")
      )
        responseKey = "How much do projects cost?";
      else if (
        text.includes("work") ||
        text.includes("portfolio") ||
        text.includes("example") ||
        text.includes("show me")
      )
        responseKey = "Can I see your previous work?";
      else if (
        text.includes("start") ||
        text.includes("project") ||
        text.includes("hire")
      )
        responseKey = "How do I get started?";
      else if (
        text.includes("human") ||
        text.includes("person") ||
        text.includes("real") ||
        text.includes("whatsapp") ||
        text.includes("email") ||
        text.includes("contact")
      )
        responseKey = "I want to talk to a human";

      const response = responseKey
        ? RESPONSES[responseKey]
        : {
            text: "I'm still learning! Would you like to talk to one of our experts instead?",
            links: [
              {
                label: "WhatsApp Us",
                url: "https://wa.me/447405786279",
                icon: Phone,
              },
              {
                label: "Email Us",
                url: "mailto:admin@codeillustrated.com",
                icon: Mail,
              },
            ],
            options: ["Back to main menu"],
          };

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: response.text!,
        timestamp: new Date(),
        options: response.options,
        links: response.links,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] sm:bottom-8 sm:right-8">
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl transition-colors hover:bg-gray-800 sm:h-16 sm:w-16"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6 sm:h-8 sm:w-8" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] max-w-[400px] sm:bottom-24"
          >
            <Card className="flex h-[550px] flex-col overflow-hidden border-none shadow-2xl ring-1 ring-black/5 bg-white rounded-3xl">
              {/* Header */}
              <div className="flex items-center gap-3 bg-black p-5 text-white">
                <Avatar className="h-10 w-10 border-2 border-white/20">
                  <AvatarImage src="/labs/images/logo.png" />
                  <AvatarFallback className="bg-gray-800">CIS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold anton-sc text-lg leading-none tracking-wide mt-1">
                    CIS Support
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Online
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages Body */}
              <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                <div className="flex flex-col gap-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.type === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                          msg.type === "user"
                            ? "bg-black text-white rounded-tr-none"
                            : "bg-gray-100 text-gray-900 rounded-tl-none"
                        }`}
                      >
                        {msg.text}
                      </div>

                      {/* Bot Options & Links */}
                      {msg.type === "bot" && (msg.options || msg.links) && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {msg.options?.map((option) => (
                            <button
                              key={option}
                              onClick={() => handleOptionClick(option)}
                              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-black hover:bg-black hover:text-white"
                            >
                              {option}
                            </button>
                          ))}
                          {msg.links?.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target={
                                link.url.startsWith("http") ? "_blank" : "_self"
                              }
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 rounded-full bg-gray-900 px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-blue-600"
                            >
                              {link.icon && <link.icon size={12} />}
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                      <span className="mt-1 text-[10px] text-gray-400">
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex items-start gap-2">
                      <div className="rounded-2xl rounded-tl-none bg-gray-100 px-4 py-3 shadow-sm">
                        <div className="flex gap-1">
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input Footer */}
              <div className="border-t border-gray-100 bg-gray-50/50 p-4">
                <form
                  onSubmit={handleSendMessage}
                  className="flex items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-white p-1 focus-within:border-black transition-all"
                >
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border-none bg-transparent px-4 focus-visible:ring-0 shadow-none text-sm"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!inputValue.trim() || isTyping}
                    className="h-8 w-8 rounded-full bg-black hover:bg-gray-800"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                <p className="mt-2 text-center text-[10px] text-gray-400 font-medium">
                  We usually respond in under 24 hours.
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
