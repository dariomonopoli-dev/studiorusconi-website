import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Studio Rusconi",
  description:
    "Informativa sul trattamento dei dati personali di Studio Rusconi a Lugano.",
  robots: { index: true, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 md:py-16 lg:py-24">
        <article className="mx-auto max-w-3xl px-4 lg:px-8">
          <header className="mb-10">
            <h1 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Ultimo aggiornamento: 11 maggio 2026
            </p>
          </header>

          <div className="legal-prose">
            <p>
              La presente informativa descrive le modalità con cui Studio
              Rusconi tratta i dati personali degli utenti che visitano il
              sito <strong>www.studiorusconi.ch</strong> (di seguito, il
              «Sito»). Il trattamento avviene nel rispetto della Legge
              federale svizzera sulla protezione dei dati (LPD) e, per gli
              utenti residenti nell&apos;Unione Europea, del Regolamento (UE)
              2016/679 (GDPR).
            </p>

            <h2>1. Titolare del trattamento</h2>
            <p>
              <strong>Studio Rusconi</strong>
              <br />
              Via Nassa 54, 6900 Lugano, Svizzera
              <br />
              Email:{" "}
              <a href="mailto:info@studiorusconi.ch">info@studiorusconi.ch</a>
              <br />
              Telefono: <a href="tel:+41912251240">+41 91 225 12 40</a>
            </p>

            <h2>2. Dati raccolti tramite il Sito</h2>
            <p>
              Il Sito è prevalentemente informativo e <strong>non contiene
              moduli di contatto online</strong>. I dati personali vengono
              raccolti esclusivamente nei casi seguenti:
            </p>
            <ul>
              <li>
                <strong>Dati di navigazione</strong>: indirizzo IP,
                identificatori del dispositivo, tipo di browser, pagine
                visitate, data e ora di accesso, referer. Questi dati sono
                raccolti in forma aggregata e anonimizzata dal servizio
                Vercel Analytics ai fini delle statistiche di utilizzo.
              </li>
              <li>
                <strong>Dati raccolti tramite cookie di marketing</strong>:
                solo se l&apos;utente acconsente tramite il banner cookie,
                Google Ads può raccogliere identificatori pubblicitari per
                finalità di misurazione delle conversioni e remarketing.
                Maggiori dettagli nella{" "}
                <a href="/cookie-policy">Cookie Policy</a>.
              </li>
              <li>
                <strong>Dati di contatto volontariamente forniti</strong>:
                qualora l&apos;utente decida di contattarci via email,
                telefono o WhatsApp utilizzando i recapiti pubblicati sul
                Sito, tratteremo i dati comunicati per rispondere alla
                richiesta.
              </li>
            </ul>
            <p>
              <strong>
                I dati sanitari dei pazienti non sono mai trattati tramite il
                Sito.
              </strong>{" "}
              La gestione delle prenotazioni cliniche avviene tramite il
              servizio esterno Agenda.ch, che dispone di una propria
              informativa privacy consultabile sul rispettivo sito.
            </p>

            <h2>3. Finalità e basi giuridiche</h2>
            <ul>
              <li>
                <strong>Funzionamento del Sito e sicurezza</strong> (cookie
                tecnici, log di accesso) — base giuridica: interesse
                legittimo del Titolare a fornire un servizio funzionante e
                sicuro.
              </li>
              <li>
                <strong>Statistiche aggregate di utilizzo</strong> (Vercel
                Analytics) — base giuridica: interesse legittimo del Titolare
                a comprendere l&apos;utilizzo del Sito; nessun dato
                identificativo viene trattato.
              </li>
              <li>
                <strong>Marketing e misurazione campagne pubblicitarie</strong>{" "}
                (Google Ads) — base giuridica: consenso espresso
                dell&apos;utente, revocabile in qualsiasi momento tramite la{" "}
                <a href="/cookie-policy">Cookie Policy</a>.
              </li>
              <li>
                <strong>Risposta alle richieste di contatto</strong> — base
                giuridica: esecuzione di misure precontrattuali su richiesta
                dell&apos;interessato.
              </li>
            </ul>

            <h2>4. Destinatari e trasferimenti</h2>
            <p>
              I dati possono essere comunicati ai seguenti soggetti, in
              qualità di responsabili o titolari autonomi del trattamento:
            </p>
            <ul>
              <li>
                <strong>Vercel Inc.</strong> (Stati Uniti) — fornitore del
                servizio di hosting e analisi anonima del Sito.
              </li>
              <li>
                <strong>Google Ireland Limited</strong> (Irlanda, con
                possibile trasferimento a Google LLC negli Stati Uniti) —
                fornitore dei servizi pubblicitari Google Ads, attivati solo
                con consenso.
              </li>
            </ul>
            <p>
              Eventuali trasferimenti verso paesi terzi avvengono sulla base
              delle decisioni di adeguatezza adottate dal Consiglio federale
              svizzero e dalla Commissione europea, oppure mediante clausole
              contrattuali tipo adottate dai rispettivi fornitori.
            </p>

            <h2>5. Periodo di conservazione</h2>
            <ul>
              <li>
                Dati di navigazione anonimi: conservati in forma aggregata
                per il tempo strettamente necessario alle finalità
                statistiche.
              </li>
              <li>
                Dati raccolti tramite cookie di marketing: per la durata
                indicata nella <a href="/cookie-policy">Cookie Policy</a>{" "}
                (tipicamente fino a 90 giorni per i cookie Google Ads) o fino
                alla revoca del consenso.
              </li>
              <li>
                Dati forniti volontariamente via email o telefono:
                conservati per il tempo necessario a evadere la richiesta e,
                successivamente, per il periodo previsto dagli obblighi di
                legge.
              </li>
            </ul>

            <h2>6. Diritti dell&apos;interessato</h2>
            <p>
              In conformità alla LPD e, ove applicabile, al GDPR, l&apos;utente
              ha diritto di:
            </p>
            <ul>
              <li>accedere ai propri dati personali;</li>
              <li>chiederne la rettifica o la cancellazione;</li>
              <li>opporsi al trattamento o chiederne la limitazione;</li>
              <li>
                revocare in qualsiasi momento il consenso prestato, senza
                pregiudicare la liceità del trattamento precedente;
              </li>
              <li>
                ricevere i propri dati in un formato strutturato e di uso
                comune (portabilità);
              </li>
              <li>
                proporre reclamo all&apos;autorità di controllo competente —
                in Svizzera l&apos;Incaricato federale della protezione dei
                dati e della trasparenza (IFPDT,{" "}
                <a
                  href="https://www.edoeb.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  edoeb.admin.ch
                </a>
                ); per gli utenti UE, l&apos;autorità del proprio Stato di
                residenza.
              </li>
            </ul>
            <p>
              Per esercitare i propri diritti è possibile scrivere a{" "}
              <a href="mailto:info@studiorusconi.ch">info@studiorusconi.ch</a>
              .
            </p>

            <h2>7. Sicurezza</h2>
            <p>
              Adottiamo misure tecniche e organizzative adeguate per
              proteggere i dati personali da accessi non autorizzati,
              perdita, divulgazione o distruzione, in linea con lo stato
              dell&apos;arte e con i rischi del trattamento.
            </p>

            <h2>8. Link a siti di terzi</h2>
            <p>
              Il Sito contiene link a siti e servizi di terzi (Instagram,
              WhatsApp, Google Maps, Agenda.ch). Studio Rusconi non risponde
              delle pratiche privacy adottate da tali soggetti; si invita
              l&apos;utente a consultarne le rispettive informative.
            </p>

            <h2>9. Aggiornamenti</h2>
            <p>
              La presente informativa può essere aggiornata. La versione in
              vigore è quella pubblicata in questa pagina con la data di
              ultimo aggiornamento riportata in alto.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
