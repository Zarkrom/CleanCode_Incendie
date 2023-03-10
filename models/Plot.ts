// Plot is a part of the Area,
// It has four types: Forest, Building, Field and Water
// It can be flammable or not and can be set on fire
export default abstract class Plot {
  protected flammable: boolean = false
  protected burning: boolean = false
  public abstract color: string

  /**
   * Plot is a small division of Area. It can be set on fire if it is flammable
   * @constructor
   */
  protected constructor() {
    this.burning = false
  }

  public toString(): string {
    return (
      Number(this.flammable).toString() + ' ' + Number(this.burning).toString()
    )
  }

  public setOnFire(): void {
    if (this.flammable) this.burning = true
  }

  public isFlammable(): boolean {
    return this.flammable
  }

  public isBurning(): boolean {
    return this.burning
  }
}
