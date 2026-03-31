import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Footprints,
  Phone,
  CheckCircle2,
} from "lucide-react"

export function Podologia() {
  return (
    <section id="podologia" className="bg-muted/50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-lavender" />
            <Badge className="gap-1.5 bg-lavender/10 text-lavender-foreground hover:bg-lavender/10">
              <Footprints className="h-4 w-4" />
              Podologia
            </Badge>
            <span className="h-1 w-8 rounded-full bg-lavender" />
          </div>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            I nostri trattamenti di podologia
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Potete fare affidamento sulle nostre eccellenti doti tecniche, sull&apos;innovazione continua e sulla ricerca di soluzioni non standardizzate per rispondere ai bisogni unici di ciascuno.
          </p>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {/* ─── Cura Podologica Strumentale ─── */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/immagini_nuovo_sito/Podologia-cura podologica strumentale.JPG"
                alt="Cura podologica strumentale"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Cura Podologica Strumentale
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Il nostro trattamento di podologia clinica consiste nella presa a carico completa del piede, sia delle strutture sane come pure delle strutture epidermiche e ungueali che manifestano alterazioni. Il podologo professionista procede dapprima ad un&apos;attenta valutazione della situazione di salute generale per poi valutare le varie strutture del piede.
              </p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lavender" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Cura delle unghie</p>
                    <p className="text-sm text-muted-foreground">Preventiva o mirata a seconda delle problematiche, prevede interventi di taglio e fresatura eseguiti a scopo preventivo o terapeutico. Trattiamo problematiche specifiche come unghie incarnite (onicocriptosi), unghie ispessite (onicogrifosi) e onicomicosi.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lavender" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Trattamento delle cheratosi o rimozione delle callosità</p>
                    <p className="text-sm text-muted-foreground">Prevede la rimozione strumentale di calli, duroni e occhi di pernice (ipercheratosi). Il trattamento professionale permette di eliminare il dolore localizzato e prevenire complicanze che possono compromettere la deambulazione e il comfort quotidiano.</p>
                  </div>
                </li>
              </ul>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                La cura podologica non è solo estetica, ma una necessità sanitaria. Attraverso la fresatura delle unghie e il trattamento della cute, è possibile agire in modo mirato su ispessimenti e lesioni cheratosiche, restituendo immediato sollievo e migliorando la postura.
              </p>
            </div>
          </div>

          {/* ─── Ortonixia ─── */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="order-1 flex flex-col gap-4 lg:order-none">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Ortonixia
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                L&apos;ortonixia (dal greco <em>orthós</em>, corretto e <em>onyx</em>, unghia) è un trattamento podologico d&apos;avanguardia nell&apos;ambito della rieducazione ungueale. Questo metodo conservativo ha l&apos;obiettivo di correggere la curvatura della lamina, prevenendo patologie dolorose e promuovendo una ricrescita fisiologica e sana.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Le alterazioni della lamina ungueale possono causare una pressione eccessiva sui tessuti molli, provocando infiammazione peri-ungueale, arrossamento e dolore acuto. Se trascurate, queste deformità favoriscono lo sviluppo di infezioni e onicopatie croniche.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Per la correzione, si utilizzano diverse tecniche tra le quali l&apos;applicazione di un filo in titanio o cromo-vanadio fissato sulla lamina ungueale, il quale agisce sull&apos;unghia grazie alle sue proprietà elastiche, facilitando il ripristino della corretta curvatura della lamina.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                L&apos;ortonixia è particolarmente indicata per individui predisposti a patologie come l&apos;onicocriptosi (unghia incarnita), così come per coloro che soffrono di dolore a causa di deformità delle unghie. Può essere eseguita su pazienti di tutte le età.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Questo trattamento, non invasivo e indolore, fornisce un sollievo al paziente a lungo termine. Inoltre, il dispositivo utilizzato è poco ingombrante e poco visibile, adattandosi facilmente alle varie tipologie di calzature.
              </p>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/immagini_nuovo_sito/ortonixia rieducazione ungueale.JPG"
                alt="Ortonixia - rieducazione ungueale"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_65%]"
              />
            </div>
          </div>

          {/* ─── Ortesi ─── */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/immagini_nuovo_sito/podologia_ortesi.jpg"
                alt="Ortesi siliconiche su misura"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_65%]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Ortesi
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Le ortesi siliconiche sono create sagomando direttamente sul piede del paziente una pasta di silicone mescolata insieme a un catalizzatore. Questa procedura permette al podologo di confezionare un supporto unico e su misura che mantiene la sua forma nel tempo.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Le ortesi in silicone agiscono da separatori interdigitali, hanno un ruolo fondamentale nella biomeccanica del piede e nella prevenzione di diverse patologie. Hanno lo scopo di sostenere, separare e proteggere le dita del piede da eccessive tensioni, riducendo gli sfregamenti cutanei e prevenendo la formazione di callosità e altri problemi.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                L&apos;obiettivo principale è di ridistribuire le forze e le pressioni tra le dita dei piedi riducendo così l&apos;infiammazione, fornendo sollievo e agevolando la deambulazione.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Le ortesi in silicone sono adatte a persone di tutte le età, inclusi anziani e pazienti giovani con uno stile di vita attivo o sportivo. La procedura di realizzazione sarà adattata alle esigenze individuali di ciascun paziente e talvolta è necessario procedere in più tentativi.
              </p>
            </div>
          </div>

          {/* ─── Trattamenti Mirati ─── */}
          <div className="flex flex-col gap-8">
            <div className="grid items-start gap-8 lg:grid-cols-2">
              <div className="order-1 flex flex-col gap-4 lg:order-none">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Trattamenti mirati
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  I nostri interventi mirati affrontano patologie specifiche del piede di origine traumatica, infiammatoria o infettiva (verruche plantari, onicomicosi, micosi cutanee). Grazie a protocolli clinici avanzati, risolviamo i disturbi che colpiscono la salute e la mobilità del paziente.
                </p>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/immagini_nuovo_sito/podologia-trattamenti mirati.JPG"
                  alt="Trattamenti podologici mirati"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Sub-sections */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Ricostruzione unghia */}
              <div className="rounded-2xl border border-lavender/20 bg-lavender-light p-6">
                <h4 className="mb-3 text-lg font-bold text-foreground">Ricostruzione dell&apos;unghia terapeutica</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Questa procedura è volta a ripristinare parzialmente o completamente un&apos;unghia persa a causa di lesioni traumatiche o problemi di salute. Questa tecnica implica l&apos;utilizzo di gel in resina monocomponente fotopolimerizzabile, che si distingue per le sue eccellenti proprietà elastiche e meccaniche.
                </p>
              </div>

              {/* Tilomi */}
              <div className="rounded-2xl border border-lavender/20 bg-lavender-light p-6">
                <h4 className="mb-3 text-lg font-bold text-foreground">Tilomi (calli)</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Accumuli di ipercheratosi localizzata causati da eccessiva pressione o attrito. Il trattamento prevede l&apos;ablazione meccanica o manuale della cheratosi in eccesso per un sollievo immediato. La prevenzione si concentra sulle modifiche della biomeccanica del piede, come l&apos;adozione di calzature più adatte o la realizzazione di ortesi in silicone personalizzate.
                </p>
              </div>

              {/* Onicocriptosi */}
              <div className="rounded-2xl border border-lavender/20 bg-lavender-light p-6 md:col-span-2 lg:col-span-1">
                <h4 className="mb-3 text-lg font-bold text-foreground">Onicocriptosi (unghia incarnita)</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  L&apos;onicocriptosi è una condizione patologica in cui una porzione dentellata del bordo laterale dell&apos;unghia penetra nei tessuti molli circostanti, con il rischio di infezione. Coinvolge tipicamente il primo dito del piede ed è più comune tra adolescenti e giovani adulti, con una prevalenza maschile rispetto a quella femminile di 3:1. <span className="text-xs">(Arica, Bostanci, Kocyigit, 2019)</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Inizialmente può causare solo lievi fastidi, ma con il tempo si manifestano sintomi più evidenti: la pelle circostante diventa arrossata, lucida e tesa, mentre il dito appare gonfio e infiammato. La presenza dello sperone ungueale ostacola il processo di guarigione e può portare alla formazione di un granuloma.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:+41912251240">
              <Button size="lg" className="gap-2 bg-lavender text-lavender-foreground hover:bg-lavender/90">
                <Phone className="h-4 w-4" />
                Chiama per un appuntamento
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
