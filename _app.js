import { Retro_Gaming } from "next/font/google";
import "./globals.css";

const retroGaming = Retro_Gaming({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-retro-gaming",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${retroGaming.variable}`}>
      <body>{children}</body>
    </html>
  );
}
