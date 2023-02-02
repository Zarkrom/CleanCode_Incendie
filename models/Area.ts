import {Plot} from "./Plot";
import {Building} from "./Building";
import {Field} from "./Field";
import {Water} from "./Water";
import {Forest} from "./Forest";
import {Wind} from "./Wind";
import {Direction} from "./Direction";

// Area contains a board of plots
export class Area {
    size: number;
    plots: Plot[][] = []; // grid of plots

    constructor(size: number) {
        // Generate a random area
        // For each plot, add a random plot in plots
        this.size = size;
        for (let x = 0; x < this.size; x++) {
            const line = [];
            const tr = document.createElement('tr');

            for (let y = 0; y < this.size; y++) {
                const plot = this.getRandomPlot();
                line.push(plot);
                const td = document.createElement('td');
                td.setAttribute('id', `${x}.${y}`);
                td.innerHTML = plot.toString();
                td.style.backgroundColor = plot.isBurning() ? 'red' : 'green';
                tr.appendChild(td);
            }
            this.plots.push(line);
            document.getElementById('area').appendChild(tr);
        }
    }


    show(){
        for (const line of this.plots) {
            for (const plot of line) {
                const x = this.plots.indexOf(line)
                const y = line.indexOf(plot)
                document.getElementById(`${x}.${y}`).innerHTML = plot.toString();
                document.getElementById(`${x}.${y}`).style.backgroundColor = plot.isBurning() ? 'red' : 'green';
            }
        }
    }

    // Choose a random plot
    // If it's flammable, set it on fire
    // If not, call function again and try on another plot
    setFireRandomly(): void {
        const randomX = Math.floor(Math.random() * this.size);
        const randomY = Math.floor(Math.random() * this.size);
        let randomPlot = this.plots[randomX][randomY];

        if(randomPlot.isFlammable() == false || randomPlot.isBurning() == true){
            this.setFireRandomly();
        }   else {
            randomPlot.setOnFire();
        }
    }

    getRandomPlot(): Plot {
        const allPlots: Plot[] = [
            new Building(),
            new Building(),
            new Field(),
            new Water(),
            new Forest(),
            new Forest(),
        ];
        const randomType = Math.floor(Math.random() * 5);
        return allPlots[randomType];
    }

    // Get each fired plot of the area and spread fire around it
    spreadFire(wind: Wind): void {
        const plotsToFire: Plot[] = [];

        for (const line of this.plots) {
            for (const plot of line) {
                if (plot.isBurning()) {
                    const x = this.plots.indexOf(line);
                    const y = line.indexOf(plot);
                    // If wind is not set, fire spread in all directions
                    const fireDirections: Direction[] = wind.getDirections();

                    // Fire will spread on plots near burning plots
                    if(fireDirections.includes(Direction.NORTH) && x != 0){
                        plotsToFire.push(this.plots[x-1][y]);
                    }
                    if(fireDirections.includes(Direction.EAST) && y != 0){
                        plotsToFire.push(this.plots[x][y-1]);
                    }
                    if(fireDirections.includes(Direction.SOUTH) && x != this.plots.length-1){
                        plotsToFire.push(this.plots[x+1][y]);
                    }
                    if(fireDirections.includes(Direction.WEST) && y != this.plots[0].length-1){
                        plotsToFire.push(this.plots[x][y+1]);
                    }
                }
            }
        }

        // Spread fire on new plots to not set fire recursively
        for (const plot of plotsToFire) {
            plot.setOnFire();
        }
    }


}
