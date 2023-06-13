import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Promptiee",
  description: "AI based prompts search.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-slate-100 px-2"}>
        <Provider>
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
