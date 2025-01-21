import CartContextProvider from "@/hooks/CartHook";
import "./globals.css";
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { Toaster } from "react-hot-toast";
 
// If loading a variable font, you don't need to specify the font weight
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricol', })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })


export const metadata = {
  title: "Fleket.com - Launch your Dream store for Free!",
  description: "Launch your dream store for Rs 0/- on Fleket.com! Create a stunning online store for FREE without any tech skills. Turn your ideas into income effortlessly. Start today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/icon.png' />
	  <!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-PQLR0C3ZC7"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'G-PQLR0C3ZC7');
	</script>
		  </head>
      <body className={`${bricolageGrotesque.variable} ${inter.variable}`}>
        <CartContextProvider>
          <Toaster />
        {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
