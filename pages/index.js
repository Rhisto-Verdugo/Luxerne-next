import Head from "next/head"
import Image from "next/image"
import FeaturedItems from "../components/FeaturedItems"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Main from "../components/Main"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luxerne</title>
        <meta name='description' content='Luxury beach resort Luxerne' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Hero />
        <FeaturedItems />
        <Main />
        <Footer />
      </main>
    </div>
  )
}
