import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ShieldCheck,
  Sparkles,
  Sun,
  Gem,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Instagram,
} from "lucide-react"

export function IgieneDentale() {
  return (
    <section id="igiene-dentale" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-teal" />
            <Badge className="gap-1.5 bg-teal/10 text-teal-foreground hover:bg-teal/10">
              <span className="text-lg">🦷</span>
              Igiene Dentale
            </Badge>
            <span className="h-1 w-8 rounded-full bg-teal" />
          </div>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            I nostri trattamenti di igiene dentale
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {/* ─── Trattamento Igiene Dentale ─── */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/immagini_nuovo_sito/igiene dentale.jpg"
                alt="Trattamento igiene dentale professionale"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-teal" />
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Trattamento igiene dentale
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Per garantire un risultato ottimale ogni seduta di igiene dentale professionale presso il nostro studio segue un protocollo rigoroso che comprende:
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Aggiornamento dell&apos;anamnesi medica</p>
                    <p className="text-sm text-muted-foreground">Valutazione dello stato di salute generale per agire in totale sicurezza.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Screening completo del cavo orale</p>
                    <p className="text-sm text-muted-foreground">Un controllo accurato per la diagnosi precoce di carie, analisi delle mucose e valutazione della salute parodontale.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Ablazione del tartaro (Detartrasi)</p>
                    <p className="text-sm text-muted-foreground">Rimozione professionale del tartaro sopra e sotto-gengivale per prevenire gengiviti e parodontiti.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Estetica e Lucidatura (Polishing)</p>
                    <p className="text-sm text-muted-foreground">Rimozione delle macchie dentali superficiali causate da fumo, caffè o tè, per restituire la naturale brillantezza e il bianco originario ai tuoi denti.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Protezione e Remineralizzazione dello smalto</p>
                    <p className="text-sm text-muted-foreground">Applicazione professionale di prodotti ad alta concentrazione di fluoro o idrossiapatite per rinforzare lo smalto dentale e ridurre le sensibilità.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* ─── Trattamento Parodontale ─── */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="order-1 flex flex-col gap-4 lg:order-none">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-teal" />
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Trattamento parodontale non chirurgico
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Questo trattamento consiste nella cura delle tasche gengivali e della parodontite. La pulizia profonda e i vari trattamenti di igiene parodontale avanzata ha lo scopo di ottenere nel medio termine gengive perfettamente sane.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Quando il tartaro e i batteri si spingono oltre il bordo gengivale, è necessario intervenire con una procedura di levigatura radicolare. Questo trattamento consiste in una pulizia profonda delle tasche gengivali, mirata a:
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <p className="text-sm text-muted-foreground">Rimuovere accuratamente i depositi di tartaro sub-gengivale.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <p className="text-sm text-muted-foreground">Ridurre drasticamente la carica batterica.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <p className="text-sm text-muted-foreground">Levigare le radici dei denti per favorire una naturale guarigione delle gengive.</p>
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Per garantire la massima precisione e il miglior comfort al paziente, il trattamento viene solitamente suddiviso in più sedute, permettendoci di monitorare costantemente i progressi e la rigenerazione dei tessuti.
              </p>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/immagini_nuovo_sito/igiene dentale- trattamento non chirurgico.jpg"
                alt="Trattamento parodontale non chirurgico"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* ─── Brillantino Dentale ─── */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/immagini_nuovo_sito/Brillantino dentale.jpg"
                alt="Applicazione gioiello dentale"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Gem className="h-6 w-6 text-teal" />
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Applicazione gioiello dentale
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Vuoi dare un tocco di luce extra al tuo volto? Regalati l&apos;applicazione del brillantino dentale, un dettaglio di stile discreto ed elegante per illuminare il tuo sorriso.
              </p>
              <h4 className="text-sm font-semibold text-foreground">Un punto luce sicuro e non invasivo</h4>
              <p className="text-sm text-muted-foreground">
                Molti temono che l&apos;applicazione possa danneggiare lo smalto, ma la nostra procedura è studiata per essere totalmente sicura e conservativa:
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Rispetto del dente</p>
                    <p className="text-sm text-muted-foreground">Il brillantino viene applicato sulla superficie esterna del dente tramite una tecnica sicura di adesione professionale, senza intaccare lo smalto.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Trattamento indolore</p>
                    <p className="text-sm text-muted-foreground">L&apos;applicazione è rapida, non invasiva e assolutamente indolore.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Massima flessibilità</p>
                    <p className="text-sm text-muted-foreground">Il gioiello può essere rimosso in qualsiasi momento, restituendo al dente il suo aspetto originario senza lasciarne traccia.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Luminosità immediata</p>
                    <p className="text-sm text-muted-foreground">Un piccolo punto luce che valorizza l&apos;estetica del tuo sorriso in pochi minuti.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* ─── Sbiancamento Dentale ─── */}
          <div className="flex flex-col gap-8">
            <div className="grid items-start gap-8 lg:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/immagini_nuovo_sito/igiene dentale-sbiancamento1.webp"
                  alt="Sorriso luminoso dopo sbiancamento dentale professionale"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Sun className="h-6 w-6 text-teal" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Sbiancamento Dentale Professionale
                  </h3>
                </div>
                <p className="text-sm font-medium text-teal-foreground">Scegli il Trattamento Ideale per Te</p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  Il desiderio di un sorriso più bianco e luminoso può essere soddisfatto attraverso diverse metodologie cliniche. Presso il nostro studio, offriamo soluzioni personalizzate basate sulle tue esigenze di tempo e sui risultati desiderati, garantendo sempre la massima sicurezza per lo smalto.
                </p>
              </div>
            </div>

            {/* Sub-treatments grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Home Bleaching */}
              <div className="rounded-2xl border border-teal/20 bg-teal-light p-6">
                <h4 className="mb-3 text-lg font-bold text-foreground">
                  Sbiancamento Dentale Domiciliare (Home Bleaching)
                </h4>
                <p className="mb-3 text-sm font-medium text-teal-foreground">
                  La soluzione ideale per chi cerca un risultato stabile e duraturo nel tempo.
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Come funziona:</strong> Ti forniamo un kit professionale con prodotti a bassa concentrazione, da applicare circa 60 minuti al giorno oppure durante la notte per alcuni giorni.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Vantaggi:</strong> L&apos;azione graduale del principio attivo assicura una brillantezza profonda. Richiede costanza nell&apos;applicazione, ma i risultati sono tra i più persistenti.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Nota:</strong> La fattibilità del trattamento verrà valutata insieme al tuo professionista di fiducia durante la visita specialistica.</p>
                  </li>
                </ul>
              </div>

              {/* In-Office */}
              <div className="rounded-2xl border border-teal/20 bg-teal-light p-6">
                <h4 className="mb-3 text-lg font-bold text-foreground">
                  Sbiancamento Dentale in Studio (In-Office)
                </h4>
                <p className="mb-3 text-sm font-medium text-teal-foreground">
                  Perfetto per chi ha poco tempo o desidera un cambiamento estetico immediato.
                </p>
                <div className="relative mb-4 aspect-[3/2] overflow-hidden rounded-xl">
                  <Image
                    src="/images/immagini_nuovo_sito/sbiancamento dentale in-office .JPG"
                    alt="Sbiancamento dentale in-office con lampada professionale"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <ul className="mb-6 flex flex-col gap-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Come funziona:</strong> Utilizziamo gel ad alta concentrazione per un tempo ridotto sotto costante supervisione professionale.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Vantaggi:</strong> Risultato istantaneo, ideale in vista di eventi importanti o per chi preferisce non dover gestire il trattamento domiciliare.</p>
                  </li>
                </ul>

                {/* Protocolli combinabili */}
                <div className="border-t border-teal/20 pt-6">
                  <p className="mb-3 text-sm font-semibold text-foreground">I nostri protocolli esclusivi</p>
                  <p className="mb-4 text-sm text-muted-foreground">
                    I trattamenti possono essere combinati per massimizzare l&apos;efficacia:
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="rounded-xl border border-teal/20 bg-background/60 p-4">
                      <p className="text-sm font-semibold text-foreground">Trattamento Intensivo</p>
                      <p className="mt-1 text-sm text-muted-foreground">Il protocollo d&apos;urto: prevede una sessione di circa 90 minuti per ottenere il massimo grado di schiaritura possibile in una sola seduta.</p>
                    </div>
                    <div className="rounded-xl border border-teal/20 bg-background/60 p-4">
                      <p className="text-sm font-semibold text-foreground">Trattamento Click</p>
                      <p className="mt-1 text-sm text-muted-foreground">La soluzione &quot;smart&quot;: si effettua subito dopo la seduta di igiene dentale (detartrasi) per un tocco di luce immediato.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Galleria prima e dopo */}
            <div className="rounded-2xl border border-teal/20 bg-teal-light p-6 md:p-8">
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p className="text-sm font-semibold text-foreground">Galleria prima e dopo</p>
                <a
                  href="https://www.instagram.com/centro_igea_lugano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <Instagram className="h-4 w-4 text-white" />
                  </span>
                  Seguici
                </a>
              </div>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
                {[
                  { src: "/images/foto Dario/prima e dopo 1.JPG", alt: "Prima e dopo sbiancamento dentale - caso 1" },
                  { src: "/images/foto Dario/prima e dopo2.JPG", alt: "Prima e dopo sbiancamento dentale - caso 2" },
                  { src: "/images/foto Dario/prima e dopo 3.JPG", alt: "Prima e dopo sbiancamento dentale - caso 3" },
                  { src: "/images/foto Dario/igiene dentale-sbiancamento 2.JPG", alt: "Risultato sbiancamento dentale" },
                ].map((photo) => (
                  <div key={photo.src} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Requisiti */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h4 className="text-lg font-bold text-foreground">Requisiti Fondamentali per lo Sbiancamento</h4>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Per garantire l&apos;efficacia del trattamento e proteggere la salute della tua bocca, è necessario rispettare queste condizioni:
              </p>
              <ol className="flex flex-col gap-2">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">1</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Igiene Dentale Recente:</strong> È fondamentale aver effettuato una pulizia professionale negli ultimi 60 giorni.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">2</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Salute Gengivale:</strong> Le gengive devono essere perfettamente sane e prive di infiammazioni.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">3</span>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Salute dentale:</strong> I denti devono essere perfettamente sani e privi di carie.</p>
                </li>
              </ol>
              <p className="mt-4 text-sm italic text-muted-foreground">
                <strong className="text-foreground">Il consiglio dell&apos;esperto:</strong> In caso di dubbi sulla salute del tuo smalto o sulla presenza di otturazioni/corone che non cambiano colore con lo sbiancamento, contatta lo Studio Rusconi per una consulenza mirata.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a href="https://book.agenda.ch/services?companyId=17111" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 bg-teal text-teal-foreground hover:bg-teal/90">
                <Calendar className="h-4 w-4" />
                Prenota igiene dentale
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
