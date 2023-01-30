import {Plot} from "./Plot";

export class Field extends Plot {
    constructor() {
        super();
        this.flammable = false;
    }

    toString(): string {
        return "Field:" + super.toString();
    }
}
