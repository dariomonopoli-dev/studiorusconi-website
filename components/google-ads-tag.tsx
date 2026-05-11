"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

const GA_TRACKING_ID = "AW-11216129391"

export function GoogleAdsTag() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    const sync = () => {
      setConsented(localStorage.getItem("cookie-consent") === "accepted")
    }
    sync()
    window.addEventListener("cookie-consent-change", sync)
    return () => window.removeEventListener("cookie-consent-change", sync)
  }, [])

  if (!consented) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
    </>
  )
}
