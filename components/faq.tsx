import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const faqs = [
  {
    question: "Come posso prenotare un appuntamento?",
    answer:
      "Potete prenotare telefonicamente, via WhatsApp oppure utilizzando il pulsante \"Prenota\" sul nostro sito. Vi ricontatteremo al più presto per confermare data e orario.",
  },
  {
    question: "Qual è la politica di cancellazione?",
    answer:
      "Vi chiediamo di avvisarci almeno 24 ore prima dell'appuntamento in caso di disdetta. Questo ci permette di offrire lo slot ad altri pazienti in attesa. Ci riserviamo la possibilità di fatturare 50.- per la copertura dei costi.",
  },
  {
    question:
      "Le prestazioni sono coperte dall'assicurazione? E il piede diabetico?",
    answer:
      "Molte prestazioni di igiene dentale e podologia sono riconosciute dalle assicurazioni complementari svizzere. Per la cura del piede diabetico, i trattamenti possono essere coperti dall'assicurazione di base con prescrizione medica. Contattateci per maggiori dettagli.",
  },
  {
    question: "Cosa devo portare alla prima visita?",
    answer:
      "Portate la vostra tessera assicurativa e, se disponibili, eventuali radiografie o referti precedenti. Per la podologia, vi consigliamo di indossare calzature comode.",
  },
  {
    question: "Ogni quanto è consigliata una seduta di igiene dentale?",
    answer:
      "In genere consigliamo una seduta di igiene professionale ogni 6 mesi, ma la frequenza può variare in base alle condizioni individuali della bocca. Martina valuterà con voi il piano di mantenimento più adatto.",
  },
  {
    question: "Dove si trova lo Studio Rusconi a Lugano?",
    answer:
      "Lo studio è in Via Nassa 54, 6900 Lugano, nel centro pedonale a pochi passi dal lungolago e dalla Piazza della Riforma.",
  },
  {
    question: "Quanto costa una seduta di igiene dentale a Lugano?",
    answer:
      "Presso lo Studio Rusconi il trattamento dell'igienista dentale costa da 150.- CHF (cura semplice, 45 min) a 180.- CHF (cura intensiva, 60 min); per i bambini fino ai 10 anni 90.- CHF. Il tariffario completo, allineato alle raccomandazioni dell'associazione professionale, è pubblicato nella pagina Tariffe.",
  },
  {
    question: "Serve una prescrizione del dentista per l'igiene dentale?",
    answer:
      "No. L'igienista dentale SSS è una professione sanitaria riconosciuta in Svizzera e potete prenotare la seduta direttamente, anche senza essere pazienti di uno studio dentistico. In caso di problemi che richiedono un dentista, vi indirizziamo a un collega di fiducia.",
  },
  {
    question: "In quali lingue vengono seguiti i pazienti?",
    answer:
      "Parliamo italiano, francese, tedesco e inglese.",
  },
]

export function FAQ() {
  return (
    <section className="bg-muted/50 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Domande frequenti
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Trovate qui le risposte alle domande più comuni.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
