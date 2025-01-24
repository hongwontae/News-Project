import "./globals.css";
import MainHeader from "@/components/main-header/MainHeader";

export const metadata = {
  title: "N-News",
  description: "Personal News-Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-Custom-News-Font">
        {children}
      </body>
    </html>
  );
}
