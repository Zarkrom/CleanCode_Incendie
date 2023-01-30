import {Area} from "./models/Area";
import {Building} from "./models/Building";
import {Forest} from "./models/Forest";
import {Water} from "./models/Water";
import {Field} from "./models/Field";
import { Plot } from "./models/Plot";

const area: Area = new Area();

for (let i = 0; i < 3; i++) {
    area.setFireRandomly();
}


// // Display area
// for (const line of area.plots) {
//     for (const plot of line) {
//         console.log(area.plots.indexOf(line), line.indexOf(plot), plot.toString());

//         const x = area.plots.indexOf(line)
//         const y = line.indexOf(plot)

//         // document.querySelector(`#${x}.${y}`).innerHTML = plot.toString();
//         document.getElementById(`${x}.${y}`).innerHTML = plot.toString();
//     }
//     console.log("---------------");
// }

// console.log("**************************************************************")


area.spreadFire();
for (const line of area.plots) {
    for (const plot of line) {
        console.log(area.plots.indexOf(line), line.indexOf(plot), plot.toString());

        const x = area.plots.indexOf(line)
        const y = line.indexOf(plot)

        document.getElementById(`${x}.${y}`).innerHTML = plot.toString();
    }
    console.log("---------------");
}
