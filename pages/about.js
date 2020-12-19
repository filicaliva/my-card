import Header from '../components/Header.js'
import About from '../components/AboutUs'
import Footer from '../components/Footer'

export default function Home({count}) {

    console.log(count);


    return (
        <div className="container">
            <Header />
            <About />
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