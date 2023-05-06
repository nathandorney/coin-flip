import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flip a coin!",
  description: "A tool that lets you flip a coin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app-container">{children}</div>
      </body>
    </html>
  );
}
