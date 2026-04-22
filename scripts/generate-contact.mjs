import { writeFileSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import QRCode from "qrcode"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(__dirname, "..", "public")

const vcard = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Studio Rusconi;;;;",
  "FN:Studio Rusconi",
  "ORG:Studio Rusconi",
  "TITLE:Studio di igiene dentale e podologia",
  "TEL;TYPE=WORK,VOICE:+41912251240",
  "TEL;TYPE=CELL,VOICE:+41765591870",
  "EMAIL;TYPE=WORK:info@studiorusconi.ch",
  "ADR;TYPE=WORK:;;Via Nassa 54;Lugano;;6900;Svizzera",
  "URL:https://studiorusconi.ch",
  "X-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/centro_igea_lugano",
  "END:VCARD",
  "",
].join("\r\n")

const vcfPath = resolve(publicDir, "studio-rusconi.vcf")
writeFileSync(vcfPath, vcard, "utf8")
console.log(`wrote ${vcfPath} (${vcard.length} bytes)`)

const svg = await QRCode.toString(vcard, {
  type: "svg",
  errorCorrectionLevel: "M",
  margin: 2,
  color: { dark: "#000000", light: "#ffffff" },
})

const svgPath = resolve(publicDir, "qr-studio-rusconi.svg")
writeFileSync(svgPath, svg, "utf8")
console.log(`wrote ${svgPath} (${svg.length} bytes)`)
