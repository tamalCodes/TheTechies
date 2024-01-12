import { Montserrat, Nunito_Sans, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-nunito",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "The Techies",
  description: "The best tech community ever.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${nunito.variable} ${montserrat.variable} font-sans bg-[#FDFBF9] `}
      >
        {children}
      </body>
    </html>
  );
}
