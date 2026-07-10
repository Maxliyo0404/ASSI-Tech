import "./globals.css";

export const metadata = {
  title: "ASSI Tech - Tibbiy Asboblar va Uskunalar",
  description: "ASSI Tech - tibbiy texnologiyalar va uskunalarning yetakchi dielri. Ultrasound, EKG, X-Ray va boshqa tibbiy asboblar.",
  keywords: "tibbiy asboblar, ultrasound, EKG, X-Ray, ASSI Tech, Tashkent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}