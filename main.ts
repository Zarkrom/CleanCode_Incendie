import { Area } from './models/Area'
import { Wind } from './models/Wind'
import { Direction } from './models/Direction'

const area: Area = new Area(100)

for (let i = 0; i < 10; i++) {
  area.setFireRandomly()
}

area.show()

let iteration = 0
setInterval(() => {
  iteration++
  area.spreadFire(new Wind(Direction.NORTH, Direction.WEST))
  area.show()
  document.getElementById('iteration').innerText = String(iteration)
}, 1000)
