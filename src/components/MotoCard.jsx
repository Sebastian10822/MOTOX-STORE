import '../styles/MotoCard.css'

function MotoCard({ moto }) {
  const mensaje = `Hola, estoy interesado en la ${moto.modelo}. ¿Me puedes dar más información?`

  return (
    <div className="moto-card">
      <div className="moto-img-box">
        <img src={moto.imagen} alt={moto.modelo} />

        <div className="moto-hover">
          <h4>{moto.modelo}</h4>
          <ul>
            <li>🏍️ {moto.motor}</li>
            <li>⚡ {moto.velocidad}</li>
            <li>⛽ {moto.consumo}</li>
          </ul>
        </div>
      </div>

      <div className="moto-info">
        <p className="cilindraje">{moto.cilindrada}</p>
        <span className="precio">{moto.precio}</span>

        <a
          href={`https://wa.me/573000000000?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  )
}

export default MotoCard
