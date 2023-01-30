import {Direction} from "./Direction";

export class Wind {
    force: number;
    direction: Direction;

    constructor() {
        // Generate a random number between 0 & 5
        this.force = Math.floor(Math.random() * 5);
    }
}
