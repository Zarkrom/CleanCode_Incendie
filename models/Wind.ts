import {Direction} from "./Direction";

export class Wind {
    directions: Direction[];

    constructor(...directions: Direction[]) {
        if(directions.length === 0){
            this.directions = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST];
        } else {
            this.directions = directions;
        }
    }

    getDirections(): Direction[] {
        return this.directions;
    }
}
