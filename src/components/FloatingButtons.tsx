import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const phoneNumber = "+919842365480";
  const whatsappNumber = "919842365480";
  const whatsappMessage =
    "Hi! I'm interested in your AC services. Can you help me?";

  return (
    <>
      {/* Call Button - Bottom Left */}
      <a
        href={`tel:${phoneNumber}`}
        className="fixed left-4 bottom-6 z-[100] flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce-subtle border-2 border-white/20"
        aria-label="Call Mr. Cool Service"
        title="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button - Bottom Right */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-6 z-[100] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-glow border-2 border-white/20"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
};

export default FloatingButtons;
