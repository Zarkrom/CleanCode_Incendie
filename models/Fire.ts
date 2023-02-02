import Plot from './Plot'

export class Fire extends Plot {
  public color = '#FF0000'
  private readonly colors: string[] = [
    '#e25822',
    '#ff9449',
    '#f55332',
    '#ffc754',
  ]

  public constructor() {
    super()
    this.flammable = true
    this.burning = true
    setInterval(() => {
      console.log('Fire is burning')
      this.setColor()
    }, 1000)
  }

  private setColor(): void {
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
  }
}
