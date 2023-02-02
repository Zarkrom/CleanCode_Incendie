import {Plot} from "./Plot";

export class Forest extends Plot {
    constructor() {
        super();
        this.flammable = true;
    }

    toString(): string {
        return 'Forest';
    }
}
