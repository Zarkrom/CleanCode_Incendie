import {Plot} from "./Plot";

export class Building extends Plot {
    public color: string = "#a5a5a5";

    public constructor() {
        super();
        this.flammable = true;
    }
}
