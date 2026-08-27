import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
export function ServiceFaq({ faqs, accent }: { faqs: { question: string; answer: string }[]; accent: string }) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <h2 className="mb-6 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
        Domande frequenti
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className={`text-left text-base font-medium text-foreground ${accent}`}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
