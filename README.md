# AI Chatbot UI (Next.js)

## Project Description

This project is a responsive AI chatbot interface built using **Next.js (App Router)** and **TypeScript**. It allows users to send messages and receive simulated AI responses through a mock backend API.

The goal of this project is to demonstrate **frontend-backend integration, clean UI/UX design, and scalable component architecture**, similar to modern AI applications like ChatGPT.

---

## Features

### Core Features

* Chat interface with user (right) and bot (left) messages
* Timestamp displayed for each message
* Mock API with delayed response (simulates AI thinking)
* Loading / typing indicator
* Auto-scroll to latest message
* Responsive design (mobile + desktop)

---

### Bonus Features

*  Dark Mode toggle (Lucide-based UI)
*  Clear Chat functionality
*  Message fade-in animation
*  Copy message feature

---

##  Tech Stack

* **Frontend:** Next.js (App Router), TypeScript
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Backend:** Next.js API Routes

---

## ▶ How to Run Locally

```bash
git clone https://github.com/SahanaCodes7/chat-ui
cd chat-ui
npm install
npm run dev
```

Then open:

```
http://localhost:3000
```

---

##  Live Demo

 https://chat-ui-mauve-zeta.vercel.app/

---

##  Challenges & Solutions

### 1. Hydration Mismatch Error

* **Problem:** Using `Date()` directly caused server-client mismatch
* **Solution:** Moved dynamic timestamp generation into `useEffect` (client-side only)

---

### 2. UI Responsiveness Issues

* **Problem:** Layout broke on smaller screens
* **Solution:** Used Tailwind responsive utilities (`sm:`, flexible widths)

---

### 3. Component Scalability

* **Problem:** ChatWindow became crowded with logic and UI
* **Solution:** Refactored into reusable components:

  * `Message.tsx`
  * `InputArea.tsx`

---

### 4. UI/UX Improvements

* Improved spacing, alignment, and readability
* Added animations and interactive features
* Implemented clean and minimal design inspired by modern AI apps

---

##  Key Learnings

* Building scalable React component architecture
* Managing state and async API calls
* Handling real-world UI issues (hydration, responsiveness)
* Designing user-friendly and modern interfaces

---

##  Conclusion

This project demonstrates the ability to build a **clean, responsive, and feature-rich chatbot UI**, following modern development practices and focusing on both functionality and user experience.

---

 *Designed and developed as part of an internship assignment at Metawurks to showcase full-stack and UI/UX skills.*
