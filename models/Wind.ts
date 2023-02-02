import {Direction} from "./Direction";

export class Wind {
    private readonly _directions: Direction[];

    /**
     * A wind has directions
     * @constructor
     * @param {Direction[]} directions - directions of wind. By default, wind has all directions
     */
    constructor(...directions: Direction[]) {
        if(directions.length === 0){
            this._directions = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST];
        } else {
            this._directions = directions;
        }
    }

    getDirections(): Direction[] {
        return this._directions;
    }
}
