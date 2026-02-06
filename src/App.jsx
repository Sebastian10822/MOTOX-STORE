import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import MotoList from './components/MotoList'
import WhyUs from './components/WhyUs'
import Brands from './components/Brands'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />

      <section className="catalog">
        <h2>Motos disponibles</h2>
        <MotoList />
      </section>

      <WhyUs />
      <Brands />
      <Footer />
    </>
  )
}

export default App
