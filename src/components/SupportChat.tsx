import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

type ChatConfig = {
  apiUrl: string;
  title: string;
  intro: string;
  brandColor: string;
  position: "right";
};

declare global {
  interface Window {
    DotMacFiberChatConfig?: ChatConfig;
  }
}

const apiUrl = (import.meta.env.VITE_DOTMAC_CHAT_API_URL || "").trim().replace(/\/$/, "");

export function SupportChat({ onContact }: { onContact: () => void }) {
  useEffect(() => {
    if (!apiUrl || document.getElementById("dotmac-sub-chat-script")) return;
    const url = new URL(apiUrl);
    if (url.protocol !== "https:" && !(import.meta.env.DEV && url.protocol === "http:")) return;
    window.DotMacFiberChatConfig = {
      apiUrl,
      title: "Dotmac Cloud support",
      intro: "Tell us how we can help with your domains, hosting, email or cloud services.",
      brandColor: "#0b4f31",
      position: "right",
    };
    const script = document.createElement("script");
    script.id = "dotmac-sub-chat-script";
    script.src = `${apiUrl}/static/js/fiber-chat-widget.js`;
    script.async = true;
    script.onerror = () => {
      script.remove();
      setUnavailable(true);
    };
    document.body.appendChild(script);
  }, []);

  const [unavailable, setUnavailable] = useState(!apiUrl);
  if (!unavailable) return null;
  return (
    <button
      type="button"
      onClick={onContact}
      aria-label="Contact Dotmac Cloud support"
      title="Contact support"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-xl transition-colors hover:bg-brand-green-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-green"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
