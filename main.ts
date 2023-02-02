import {Area} from "./models/Area";
import {Wind} from "./models/Wind";
import {Direction} from "./models/Direction";

const area: Area = new Area(100);

for (let i = 0; i < 25; i++) {
    area.setFireRandomly();
}

area.show();

setInterval(() => {
    area.spreadFire(new Wind(Direction.NORTH, Direction.WEST));
    area.show();
}, 500);



