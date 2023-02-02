import {Plot} from "./Plot";

export class Forest extends Plot {
    public color: string = '#228B22';
    constructor() {
        super();
        this.flammable = true;
    }
}
