type InputAreaProps = {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  loading: boolean;
  darkMode: boolean;
};

export default function InputArea({
  input,
  setInput,
  handleSend,
  loading,
  darkMode,
}: InputAreaProps) {
  return (
    <div
      className={`p-3 sm:p-4 border-t flex gap-2 ${
        darkMode ? "bg-gray-900 border-gray-700" : "bg-white"
      }`}
    >
      <input
        type="text"
        placeholder="Ask anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        className={`flex-1 p-2 border-2 rounded-lg ${
          darkMode
            ? "bg-gray-800 text-white border-gray-600"
            : "bg-white text-black border-gray-300"
        }`}
      />

      <button
        onClick={handleSend}
        disabled={!input.trim() || loading}
        className={`px-4 sm:px-5 py-2 sm:py-3 rounded text-white ${
          input.trim() && !loading
            ? "bg-indigo-600 hover:bg-indigo-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Send
      </button>
    </div>
  );
}