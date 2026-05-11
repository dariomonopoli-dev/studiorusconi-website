import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieConsentReset } from "@/components/cookie-consent-reset"

export const metadata: Metadata = {
  title: "Cookie Policy | Studio Rusconi",
  description:
    "Informativa sull'uso dei cookie del sito Studio Rusconi: tipologie, finalità e come gestire le preferenze.",
  robots: { index: true, follow: false },
}

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background py-12 md:py-16 lg:py-24">
        <article className="mx-auto max-w-3xl px-4 lg:px-8">
          <header className="mb-10">
            <h1 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
              Cookie Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Ultimo aggiornamento: 11 maggio 2026
            </p>
          </header>

          <div className="legal-prose">
            <p>
              Questa Cookie Policy spiega cosa sono i cookie, quali cookie e
              tecnologie simili utilizza il sito{" "}
              <strong>www.studiorusconi.ch</strong> (di seguito, il «Sito») e in
              che modo l&apos;utente può gestire le proprie preferenze. La
              presente informativa integra la{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>

            <h2>1. Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati
              memorizzano sul dispositivo dell&apos;utente. Vengono utilizzati
              per far funzionare il sito, per memorizzare preferenze, per
              produrre statistiche di utilizzo o per finalità di marketing. Sul
              Sito utilizziamo anche tecnologie simili (ad esempio{" "}
              <code>localStorage</code>) con funzioni analoghe.
            </p>

            <h2>2. Cookie utilizzati dal Sito</h2>

            <h3>2.1 Cookie tecnici (necessari)</h3>
            <p>
              Sono necessari al corretto funzionamento del Sito e alla
              memorizzazione delle preferenze dell&apos;utente. Non richiedono
              consenso.
            </p>
            <ul>
              <li>
                <strong>cookie-consent</strong> (localStorage del dominio
                studiorusconi.ch) — memorizza la scelta dell&apos;utente
                rispetto al banner cookie. Durata: persistente fino a
                cancellazione manuale.
              </li>
            </ul>

            <h3>2.2 Cookie di marketing e profilazione</h3>
            <p>
              Vengono attivati <strong>solo previo consenso esplicito</strong>{" "}
              dell&apos;utente tramite il banner cookie. Permettono di misurare
              l&apos;efficacia delle campagne pubblicitarie e di mostrare
              annunci pertinenti.
            </p>
            <ul>
              <li>
                <strong>Google Ads (gtag.js)</strong> — fornito da Google
                Ireland Limited. ID di tracciamento:{" "}
                <code>AW-11216129391</code>. Finalità: misurazione delle
                conversioni e remarketing per le campagne pubblicitarie di
                Studio Rusconi. I cookie tipici impostati (ad es.{" "}
                <code>_gcl_au</code>, <code>_gcl_aw</code>) hanno durata fino a
                90 giorni. Maggiori informazioni:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  policies.google.com/privacy
                </a>
                .
              </li>
            </ul>

            <h3>2.3 Cookie di terze parti tramite contenuti incorporati</h3>
            <p>
              Alcune pagine includono contenuti forniti da terze parti che
              possono impostare cookie autonomamente al momento del
              caricamento.
            </p>
            <ul>
              <li>
                <strong>Google Maps</strong> — mappa interattiva incorporata
                nella pagina contatti. Google può impostare cookie tecnici e di
                preferenze. Informativa:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  policies.google.com/privacy
                </a>
                .
              </li>
            </ul>

            <h3>2.4 Servizi di analisi anonima</h3>
            <p>
              Il Sito utilizza <strong>Vercel Analytics</strong> fornito da
              Vercel Inc., per raccogliere statistiche di utilizzo aggregate e
              anonime. Il servizio è configurato in modalità{" "}
              <em>privacy-friendly</em> e <strong>non installa cookie</strong>{" "}
              né traccia gli utenti su altri siti. Informativa:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>

            <h2>3. Gestione del consenso</h2>
            <p>
              Alla prima visita del Sito viene mostrato un banner che permette
              di accettare o rifiutare i cookie non necessari. È possibile
              modificare la propria scelta in qualsiasi momento utilizzando il
              pulsante sottostante.
            </p>

            <div className="not-prose my-6">
              <CookieConsentReset />
            </div>

            <h2>4. Come disabilitare i cookie dal browser</h2>
            <p>
              In alternativa al banner, l&apos;utente può configurare il
              proprio browser per bloccare o eliminare i cookie. Le istruzioni
              variano in base al browser utilizzato:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/it-it/microsoft-edge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
            <p>
              La disabilitazione di alcuni cookie tecnici può compromettere il
              corretto funzionamento del Sito.
            </p>

            <h2>5. Titolare del trattamento</h2>
            <p>
              Studio Rusconi — Via Nassa 54, 6900 Lugano, Svizzera. Email:{" "}
              <a href="mailto:info@studiorusconi.ch">info@studiorusconi.ch</a>{" "}
              — Telefono: <a href="tel:+41912251240">+41 91 225 12 40</a>.
            </p>

            <h2>6. Aggiornamenti</h2>
            <p>
              La presente Cookie Policy può essere aggiornata per riflettere
              modifiche normative o tecniche. La versione attualmente in
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
