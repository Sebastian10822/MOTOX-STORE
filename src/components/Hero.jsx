function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src="/Videos/hero-moto.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Encuentra tu próxima moto</h1>
        <p>Potencia, estilo y libertad sobre dos ruedas</p>
        <a href="#motos" className="btn-primary">Ver motos</a>
      </div>
    </section>
  )
}

export default Hero
