import "./globals.css"; // import global css so it applies to the whole app
import { Cormorant_Garamond, Inter } from "next/font/google"; // import google fonts helpers
import Header from "./components/Header";
import Footer from "./components/Footer";

// load a serif display font for heaginds, set a CSS variable for use in CSS
const display = Cormorant_Garamond({ 
  subsets: ["latin"], // load latin glyphs
  weight: ["400", "600", "700"], // weights we plan to use
  variable: "--font-display", // expose as CSS var for easy use
});

// load a sans-serif for body text, also set a CSS variable for easy use
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// SEO & metadata; next.js uses this automatically
export const metadata = {
  title: "NextStep",
  description: "Make the Leap!",
};

// root layour wraps every page in /app. next does this automatically
export default function RootLayout({ children }) {
  return (
    // set doc language
    <html lang="en">
      {/* apply font CSS variables to <body> so all children use it */}
      <body className="site">
        <Header />
        {/* render the active page here */}
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
