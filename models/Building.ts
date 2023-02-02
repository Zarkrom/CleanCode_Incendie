import {Plot} from "./Plot";

export class Building extends Plot {
    constructor() {
        super();
        this.flammable = true;
    }

    toString(): string {
        return 'Building';
    }
}
