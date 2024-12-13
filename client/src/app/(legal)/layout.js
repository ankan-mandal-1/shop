import Footer from "@/app/components/Footer";
import LandingHeader from '@/app/components/LandingHeader'
import styles from "@/app/page.module.css"
import Image from 'next/image'
import logo from "@/public/assets/fleket-logo.png"

export const metadata = {
  title: {template: '%s | Fleket'},
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
      <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <Image src={logo} width={150} alt="fleket.com logo" />
        </div>
        <LandingHeader />
      </header>
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
