import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    // template: "AI Avalon",
    default: "AI Avalon | Home",
  },
  description:
    "AI Avalon website, Designed and developed by Dharaneesh Boobalan. AI Avalon is a platform for AI enthusiasts to learn and explore AI technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        {/* <Sound /> */}
        <div id="my-modal" />
      </body>
    </html>
  );
}
