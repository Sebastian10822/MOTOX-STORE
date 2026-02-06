import { useParams, Link } from 'react-router-dom'
import { motos } from '../data/motos'

function MotoDetail() {
  const { id } = useParams()
  const moto = motos.find(m => m.id === Number(id))

  if (!moto) {
    return (
      <div style={{ padding: '40px' }}>
        <h2>Moto no encontrada</h2>
        <Link to="/">Volver</Link>
      </div>
    )
  }

  const mensaje = `Hola, quiero información de la ${moto.modelo}`

  return (
    <div style={{ padding: '40px' }}>
      <Link to="/">← Volver</Link>

      <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
        <img
          src={moto.imagen}
          alt={moto.modelo}
          style={{ width: '350px' }}
        />

        <div>
          <h1>{moto.modelo}</h1>
          <p><strong>Marca:</strong> {moto.marca}</p>
          <p><strong>Cilindrada:</strong> {moto.cilindrada}</p>
          <h2 style={{ color: '#ff3c00' }}>{moto.precio}</h2>

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
    </div>
  )
}

export default MotoDetail
