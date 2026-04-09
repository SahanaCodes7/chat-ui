"use client";

import { Sun, Moon } from "lucide-react";
import { Trash2 } from "lucide-react";
import Message from "./Message";
import { useState, useEffect, useRef } from "react";
import InputArea from "./InputArea";

export default function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const bottomRef = useRef<HTMLDivElement | null>(null);

    //initial message (CLIENT SIDE ONLY)
    useEffect(() => {
        const initialMessage = {
            id: 1,
            content: "Hi! I'm your AI assistant.",
            role: "assistant",
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setMessages([initialMessage]);
    }, []);

    // Auto-scroll
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    // Send message
    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = {
            id: Date.now(),
            content: input,
            role: "user",
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: userMessage.content }),
            });

            const data = await res.json();

            const botMessage = {
                id: Date.now() + 1,
                content: data.reply,
                role: "assistant",
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error(error);

            const errorMessage = {
                id: Date.now() + 2,
                content: "Something went wrong. Please try again.",
                role: "assistant",
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
            };

            setMessages((prev) => [...prev, errorMessage]);
        }

        setLoading(false);
    };

    const handleClearChat = () => {
        const initialMessage = {
            id: 1,
            content: "Hi! I'm your AI assistant.",
            role: "assistant",
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setMessages([initialMessage]);
    };

    return (
        <div className={`flex flex-col h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}>

            {/* Header */}
            <div className={`p-4 flex justify-between items-center shadow ${darkMode
                ? "bg-gray-900 text-white"
                : "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white"
                }`}>
                {/* Title */}
                <span className="text-lg font-semibold tracking-wide">
                    AI Assistant
                </span>

                {/* Right side controls */}
                <div className="flex items-center gap-3">

                    {/* Dark mode label + toggle */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition ${darkMode
                                ? "bg-gray-800 text-white"
                                : "bg-white text-gray-800"
                                } shadow`}
                        >
                            {darkMode ? <Moon size={16} /> : <Sun size={16} />}
                            <span className="text-sm">
                                {darkMode ? "Dark" : "Light"}
                            </span>
                        </button>
                    </div>

                    {/* Clear Chat Button */}
                    <button
                        onClick={handleClearChat}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition ${darkMode
                            ? "bg-gray-800 text-white hover:bg-gray-700"
                            : "bg-white text-gray-800 hover:bg-gray-100"
                            } shadow`}
                    >
                        <Trash2 size={16} />
                        <span className="text-sm">Clear</span>
                    </button>

                </div>
            </div>

            {/* Chat Area */}
            <div className={`flex-1 overflow-y-auto p-4 pb-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"
                }`}>
                {messages.map((msg) => (
                    <Message
                        key={msg.id}
                        content={msg.content}
                        role={msg.role}
                        timestamp={msg.timestamp}
                    />
                ))}

                {/* Typing animation */}
                {loading && (
                    <div className="flex items-center space-x-1 ml-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                )}

                <div ref={bottomRef} />
            </div>
            <InputArea
                input={input}
                setInput={setInput}
                handleSend={handleSend}
                loading={loading}
                darkMode={darkMode}
            />
        </div>
    );
}