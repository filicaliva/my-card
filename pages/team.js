import Header from '../components/Header.js'
import About from '../components/AboutUs'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Team() {


  return (
    <>
      <Head>
        <title>Team</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Meet development team of  my-card project.
Project idea and management - Slava Nikitenko.
Main developer - Volodymyr Salionov.
Designer - Egor Chulkin.
Dev Advisor - Andre Manuel."/>
      </Head>
      <div className="container">
        <Header />
        <About />
        <Footer />
      </div>
    </>
  )
}