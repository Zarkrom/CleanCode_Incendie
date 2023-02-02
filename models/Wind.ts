import { EDirection } from '../enum/EDirection'

export class Wind {
  private readonly _directions: EDirection[]

  /**
   * A wind has directions
   * @constructor
   * @param {EDirection[]} directions - directions of wind. By default, wind has all directions
   */
  protected constructor(...directions: EDirection[]) {
    if (directions.length === 0) {
      this._directions = [
        EDirection.NORTH,
        EDirection.EAST,
        EDirection.SOUTH,
        EDirection.WEST,
      ]
    } else {
      this._directions = directions
    }
  }

  /**
   * Create a wind with all directions
   * @returns {EDirection[]} - wind with all directions
   */
  public getDirections(): EDirection[] {
    return this._directions
  }
}
