import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/site/Section";

type Props = {
  faqs: { question: string; answer: string }[];
};

export function ServiceFAQs({ faqs }: Props) {
  return (
    <section className="py-24 bg-ice relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sky-500 font-bold uppercase tracking-widest text-xs mb-4 block">Information Desk</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about the procedure and recovery process.</p>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="bg-white border border-sky-100 rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition-all"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left font-bold text-navy group">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-sky-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:slide-in-from-top-2 data-[state=closed]:slide-out-to-top-2 duration-300">
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
