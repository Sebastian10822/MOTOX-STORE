import { motos } from '../data/motos'
import MotoCard from './MotoCard'

function MotoList() {
  return (
    <div className="moto-list">
      {motos.map((moto) => (
        <MotoCard key={moto.id} moto={moto} />
      ))}
    </div>
  )
}

export default MotoList
