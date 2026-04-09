// app/api/chat/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const userMessage = body.message;

  // Simulate delay (1.5 seconds)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Mock responses
  const responses = [
    "That's interesting! Tell me more.",
    "I understand. Let me help you with that.",
    "Can you explain that a bit more?",
    "I'm here to assist you!",
    `You said: ${userMessage}`,
  ];

  // Pick random response
  const reply =
    responses[Math.floor(Math.random() * responses.length)];

  return NextResponse.json({
    reply,
  });
}