import {Area} from "./models/Area";
import {Wind} from "./models/Wind";
import {Direction} from "./models/Direction";

const area: Area = new Area(10);

for (let i = 0; i < 1; i++) {
    area.setFireRandomly();
}

area.show();

setInterval(() => {
    area.spreadFire(new Wind(Direction.NORTH, Direction.WEST));
    area.show();
}, 500);



