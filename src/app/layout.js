import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "ASSI-Tech - Raqamli Transformatsiya Xizmatlari",
  description: "ASSI-Tech - O'zbekistonning yetakchi IT va raqamli transformatsiya xizmatlari kompaniyasi. Web dizayn, mobil ilovalar, IT xizmatlari.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="ASSI-Tech - Raqamli transformatsiya xizmatlari" />
        <meta name="keywords" content="IT, web dizayn, mobil ilovalar, raqamlashtirish" />
        <meta name="author" content="ASSI-Tech" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}