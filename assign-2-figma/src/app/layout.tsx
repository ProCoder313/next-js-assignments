

import "./globals.css";
import Header from "./components/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>

        <Header />   
        {children}
      
      </body>
    </html>
  );
}
