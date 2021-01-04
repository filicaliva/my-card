import Header from '../components/Header.js'
import Creating from '../components/Creating'
import AboutStartup from '../components/AboutStartup'
import ShowCard from '../components/Cards/ShowCards'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>My-card</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="
        My-card is free service for creating  personal card, visit card and electronic business card.
        Add photo or logo, links to social networks and messengers, blogs and websites.
        Download your unique my-card and share it with your friends.
        All your contacts in one my-card
        "/>
      </Head>
      <div className="container">
        <Header />
        <Creating />
        <AboutStartup />
        <ShowCard />
        <Footer />
      </div>
    </>
  )
}