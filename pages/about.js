import Header from '../components/Header.js'
import About from '../components/AboutUs'
import Footer from '../components/Footer'

export default function Home({count}) {


    return (
        <div className="container">
            <Header />
            <About />
            <Footer data={count} />
        </div>
    )
}


export async function getServerSideProps () {

  const res = await fetch('https://pure-citadel-12988.herokuapp.com/', {
    method: 'GET'
  })
  const {count} = await res.json()

  return {
    props: {
      count,
    },
  }
}