import "./globals.css";
import { Inter, Bricolage_Grotesque } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricol', })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })


export const metadata = {
  title: "Fleket.com - Launch your Dream store for Free!",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
