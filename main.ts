import { Wind } from './models/Wind'
import { Area } from './models/Area'
import { EDirection } from './enum/EDirection'

const area = new Area(100)
for (let i = 0; i < 1; i++) {
  area.setFireRandomly()
}
setInterval(() => {
  area.spreadFire(new Wind(EDirection.NORTH, EDirection.WEST))
  const it = document.getElementById('iteration')
}, 200)
