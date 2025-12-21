import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you provide AC service in Kangeyam and Tiruppur?",
    answer:
      "Yes, we have mobile technicians stationed in Kangeyam, Tiruppur, Avinashi, and Palladam for 60-minute emergency response.",
  },
  {
    question: "What is the cost of AC General Service?",
    answer:
      "Our AC general service starts from ₹350. The price may vary depending on whether it is a Window or Split AC and the level of cleaning required.",
  },
  {
    question: "Do you repair Inverter AC PCBs?",
    answer:
      "Yes, we specialize in chip-level repairs for Inverter AC PCBs for brands like LG, Samsung, Daikin, and Voltas.",
  },
  {
    question: "Is there a warranty on spare parts?",
    answer:
      "Absolutely. We provide a 90-day warranty on all spare parts replaced and a 30-day service warranty on our labor.",
  },
];

// JSON-LD Structure for Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const FaqSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Common questions about our repair services
          </p>
        </div>

        {/* Visual FAQ for Users */}
        <Accordion
          type="single"
          collapsible
          className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 px-6"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-slate-100"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Hidden JSON-LD for Google Bot */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
};

export default FaqSection;
