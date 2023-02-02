import Plot from './Plot'

export class Field extends Plot {
  public color: string = '#6c541e'

  public constructor() {
    super()
    this.flammable = true
  }
}
