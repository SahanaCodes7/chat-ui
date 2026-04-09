import { Copy } from "lucide-react";

type MessageProps = {
  content: string;
  role: "user" | "assistant";
  timestamp: string;
};

export default function Message({ content, role, timestamp }: MessageProps) {
  const isUser = role === "user";

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div
      className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"
        } animate-fadeIn`}
    >
      <div
        className={`max-w-[75%] sm:max-w-xs px-4 py-2 rounded-xl shadow-sm ${isUser
          ? "bg-indigo-600 text-white"
          : "bg-gray-200 text-gray-900"
          }`}
      >
        {/* Message */}
        <p className="text-sm leading-relaxed">{content}</p>

        {/* Bottom row (timestamp + copy) */}
        <div className="flex items-center justify-between mt-2 gap-4">
          <span className="text-xs opacity-70 pr-2">
            {timestamp}
          </span>

          <button
            onClick={handleCopy}
            className="opacity-50 hover:opacity-100 transition ml-2"
            title="Copy"
          >
            <Copy size={14} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}