import Plot from './Plot'

export class Water extends Plot {
  public color: string = '#74ccf4'
  public constructor() {
    super()
    this.flammable = false
  }
}
