import "./globals.css";
import Header from "./Components/Header/Header";
export const metadata = {
  title: "Mening Loyiham",
  description: "Bu mening loyiham tavsifi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body>
        <Header/>
        
       
        
      </body>
    </html>
  );
}