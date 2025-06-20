'use client';

import { faqs} from "./data";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
     const [openFaq, setOpenFaq] = useState<number | null>(null);

     const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
      };
  return (
    <section id="faq" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl 	text-muted-foreground">
              Everything you need to know about ZapMail
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left hover:bg-muted transition-colors"
                >
                  <div className="flex-between">
                    <h3 className="text-lg font-semibold text-primary">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-cta" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cta" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="	text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FAQ