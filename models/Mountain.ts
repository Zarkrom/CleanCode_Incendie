import Plot from './Plot'

export class Mountain extends Plot {
  public color: string = '#a5a5a5'

  public constructor() {
    super()
    this.flammable = false
  }
}
