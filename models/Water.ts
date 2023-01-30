import {Plot} from "./Plot";

export class Water extends Plot {
    constructor() {
        super();
        this.flammable = false;
    }

    toString(): string {
        return "Water:" + super.toString();
    }
}
