import Header from '../components/Header.js'
import Creating from '../components/Creating'
import AboutStartup from '../components/AboutStartup'
import ShowCard from '../components/Cards/ShowCards'
import Footer from '../components/Footer'

export default function Home({count}) {


  return (
    <div className="container">
      <Header />
      <Creating />
      <AboutStartup/>
      <ShowCard/>
      <Footer data={count.data} />
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/footer')
  const count = await res.json()
  return {
    props: {
      count,
    },
  }
}