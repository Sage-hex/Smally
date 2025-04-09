import { useState } from "react";

export default function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-white hover:text-green-400 text-lg"
      title="Copy to clipboard"
    >
      {copied ? "✅" : "📋"}
    </button>
  );
}
