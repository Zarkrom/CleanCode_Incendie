import {Plot} from "./Plot";
import {Building} from "./Building";
import {Field} from "./Field";
import {Water} from "./Water";
import {Forest} from "./Forest";
import {Wind} from "./Wind";
import {Direction} from "./Direction";

export class Area {
    private readonly _size: number;
    private _plots: Plot[][] = []; // grid of plots

    /**
     * An area contains a grid of plots.
     * @constructor
     * @param {number} size - size of the grid
     */
    constructor(size: number) {
        this._size = size;
        for (let x = 0; x < this._size; x++) {
            const line = [];
            const tr = document.createElement('tr');

            for (let y = 0; y < this._size; y++) {
                const plot = this.getRandomPlot();
                line.push(plot);
                const td = document.createElement('td');
                td.setAttribute('id', `${x}.${y}`);
                // td.innerHTML = plot.toString();
                td.style.backgroundColor = plot.isBurning() ? '#e25822' : plot.color;
                tr.appendChild(td);
            }
            this._plots.push(line);
            document.getElementById('area').appendChild(tr);
        }
    }

    /**
     * show area in DOM
     */
    show(){
        for (const line of this._plots) {
            for (const plot of line) {
                const x = this._plots.indexOf(line)
                const y = line.indexOf(plot)
                // document.getElementById(`${x}.${y}`).innerHTML = plot.toString();
                document.getElementById(`${x}.${y}`).style.backgroundColor = plot.isBurning() ? '#e25822' : plot.color;
            }
        }
    }

    /**
     * Set fire to a random plot in the grid
     * Retry if the plot is not flammable
     */
    setFireRandomly(): void {
        const randomX = Math.floor(Math.random() * this._size);
        const randomY = Math.floor(Math.random() * this._size);
        let randomPlot = this._plots[randomX][randomY];

        console.log(randomPlot)

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

    /**
     * Spread fire around burning plots in grid depending on wind
     * @param {Wind} wind - wind used to spread fire
     */
    spreadFire(wind: Wind): void {
        const plotsToFire: Plot[] = [];

        for (const line of this._plots) {
            for (const plot of line) {
                if (plot.isBurning()) {
                    const x = this._plots.indexOf(line);
                    const y = line.indexOf(plot);
                    const fireDirections: Direction[] = wind.getDirections();

                    if(fireDirections.includes(Direction.NORTH) && x != 0){
                        plotsToFire.push(this._plots[x-1][y]);
                    }
                    if(fireDirections.includes(Direction.EAST) && y != 0){
                        plotsToFire.push(this._plots[x][y-1]);
                    }
                    if(fireDirections.includes(Direction.SOUTH) && x != this._plots.length-1){
                        plotsToFire.push(this._plots[x+1][y]);
                    }
                    if(fireDirections.includes(Direction.WEST) && y != this._plots[0].length-1){
                        plotsToFire.push(this._plots[x][y+1]);
                    }
                }
            }
        }

        for (const plot of plotsToFire) {
            plot.setOnFire();
        }
    }


}
