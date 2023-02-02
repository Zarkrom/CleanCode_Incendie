import type Plot from './Plot'
import { createNoise2D, type NoiseFunction2D } from 'simplex-noise'
import { Water } from './Water'
import { Field } from './Field'
import { Forest } from './Forest'
import { Mountain } from './Mountain'
import { type Wind } from './Wind'
import { EDirection } from '../enum/EDirection'
import { Fire } from './Fire'
export class Area {
  private readonly _size: number
  private readonly _plots: Plot[][] = [] // grid of plots
  private readonly _noiseFunction: NoiseFunction2D

  private readonly ctx: CanvasRenderingContext2D
  private readonly cubSize: number
  private readonly offset: number

  private createCanvas(): HTMLCanvasElement {
    const canvas = document.createElement('canvas')
    canvas.setAttribute('id', 'canvas')
    canvas.setAttribute('width', String(window.innerWidth))
    canvas.setAttribute('height', String(window.innerHeight))
    document.body.appendChild(canvas)
    return canvas
  }

  private getContext(): CanvasRenderingContext2D {
    const canvas = this.createCanvas()
    const ctx = canvas.getContext('2d')
    if (ctx != null) {
      return ctx
    } else {
      throw new Error('Failed to get context')
    }
  }

  private initPlot(): void {
    for (let x = 0; x < this._size; x++) {
      const line = []
      for (let y = 0; y < this._size; y++) {
        const plot = this.getRandomPlot(x, y)
        line.push(plot)
        this.drawPlot(x, y, plot.color)
      }
      this._plots.push(line)
    }
  }

  private drawPlot(
    x: number,
    y: number,
    color: string | CanvasGradient | CanvasPattern
  ): void {
    this.ctx.fillStyle = color
    this.ctx.fillRect(
      x * (this.cubSize + this.offset),
      y * (this.cubSize + this.offset),
      this.cubSize,
      this.cubSize
    )
  }

  private refreshCanvas(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.show()
  }

  private drawFire(x: number, y: number): void {
    const gr = this.ctx.createLinearGradient(0, 0, 500, 0) // create gradient
    const tes = ['#e25822', '#ff9449', '#f55332', '#ffc754']
    gr.addColorStop(0, tes[Math.floor(Math.random() * tes.length)])
    this.drawPlot(x, y, gr)
    requestAnimationFrame(this.drawFire.bind(this, x, y))
  }

  public constructor(size: number, cubSize: number = 10, offset: number = 0) {
    this._size = size
    this.cubSize = cubSize
    this.offset = offset
    this._noiseFunction = createNoise2D()

    this.ctx = this.getContext()
    this.initPlot()
  }

  public show(): void {
    for (const line of this._plots) {
      for (const plot of line) {
        const x = this._plots.indexOf(line)
        const y = line.indexOf(plot)
        const randomBurningColor = ['#e25822', '#ff9449', '#f55332', '#ffc754'][
          Math.floor(Math.random() * 4)
        ]

        if (plot instanceof Fire) {
          this.drawFire(x, y)
        } else {
          this.drawPlot(
            x,
            y,
            plot.isBurning() ? randomBurningColor : plot.color
          )
        }

        // const plotElement = document.getElementById(`${x}.${y}`)
        // if (plotElement != null)
        //   plotElement.style.backgroundColor = plot.isBurning()
        //     ? randomBurningColor
        //     : plot.color
      }
    }
  }

  public setFireRandomly(): void {
    const randomX = Math.floor(Math.random() * this._size)
    const randomY = Math.floor(Math.random() * this._size)
    const randomPlot = this._plots[randomX][randomY]

    if (!randomPlot.isFlammable() || randomPlot.isBurning()) {
      this.setFireRandomly()
    } else {
      randomPlot.setOnFire()
      // this._plots[randomX][randomY] = new Fire()
    }

    this.refreshCanvas()
  }

  public getRandomPlot(x: number, y: number): Plot {
    // Get value from 0 to 1 generated from x and y by a noise
    const zoom = 10
    const random =
      this._noiseFunction(
        (x / this._size - 0.5) * zoom,
        (y / this._size - 0.5) * zoom
      ) /
        2 +
      0.5
    if (random <= 0.15) {
      return new Water()
    } else if (random <= 0.3) {
      return new Field()
    } else if (random <= 0.75) {
      return new Forest()
    } else {
      return new Mountain()
    }
  }

  public spreadFire(wind: Wind): void {
    const plotsToFire: Plot[] = []

    for (const line of this._plots) {
      for (const plot of line) {
        if (plot.isBurning()) {
          const x = this._plots.indexOf(line)
          const y = line.indexOf(plot)
          const fireDirections: EDirection[] = wind.getDirections()

          if (fireDirections.includes(EDirection.NORTH) && y !== 0) {
            plotsToFire.push(this._plots[x][y - 1])
          }
          if (
            fireDirections.includes(EDirection.EAST) &&
            x !== this._plots.length - 1
          ) {
            plotsToFire.push(this._plots[x + 1][y])
          }
          if (
            fireDirections.includes(EDirection.SOUTH) &&
            y !== this._plots[0].length - 1
          ) {
            plotsToFire.push(this._plots[x][y + 1])
          }
          if (fireDirections.includes(EDirection.WEST) && x !== 0) {
            plotsToFire.push(this._plots[x - 1][y])
          }
        }
      }
    }

    for (const plot of plotsToFire) {
      plot.setOnFire()
    }

    this.refreshCanvas()
  }
}
