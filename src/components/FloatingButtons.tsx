import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const phoneNumber = "+919842365480";
  const whatsappNumber = "919842365480";
  const whatsappMessage = "Hi! I'm interested in your AC services. Can you help me?";

  return (
    <div className="fixed bottom-6 z-50 flex flex-col gap-3">
      {/* Call Button - Left side */}
      <a
        href={`tel:${phoneNumber}`}
        className="fixed left-4 bottom-6 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-glow-blue hover-scale animate-bounce-subtle"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button - Right side */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-6 flex items-center justify-center w-14 h-14 rounded-full bg-fresh-green text-accent-foreground shadow-glow-green hover-scale animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
