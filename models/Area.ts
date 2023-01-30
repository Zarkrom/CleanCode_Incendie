import {Plot} from "./Plot";
import {Building} from "./Building";
import {Field} from "./Field";
import {Water} from "./Water";
import {Forest} from "./Forest";

// Area contains a board of plots
export class Area {
    plots: Plot[][] = []; // grid of plots

    constructor() {
        // Generate a random area
        // For each plot, add a random plot in plots
        for (let lineIndex = 0; lineIndex < 5; lineIndex++) {
            const line = [];
            for (let plotIndex = 0; plotIndex < 5; plotIndex++) {
                line.push(this.getRandomPlot());
            }
            this.plots.push(line);
        }
    }

    // Choose a random plot
    // If it's flammable, set it on fire
    // If not, call function again and try on another plot
    setFireRandomly(): void {
        const randomX = Math.floor(Math.random() * 5);
        const randomY = Math.floor(Math.random() * 5);
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
    spreadFire(): void {
        for (const line of this.plots) {
            for (const plot of line) {
                if (plot.isBurning()) {
                    // Get coords
                    const x = this.plots.indexOf(line)
                    const y = line.indexOf(plot)

                    // Fire will spread on plots near the fired plot
                    const plotsToFire: Plot[] = [];
                    if(x != 0){
                        plotsToFire.push(this.plots[x-1][y]);
                    }
                    if(x != this.plots.length-1){
                        plotsToFire.push(this.plots[x+1][y]);
                    }
                    if(y != 0){
                        plotsToFire.push(this.plots[x][y-1]);
                    }
                    if(y != this.plots[0].length-1){
                        plotsToFire.push(this.plots[x][y+1]);
                    }

                    // Spread fire
                    for (const plot of plotsToFire) {
                        plot.setOnFire();
                    }
                }
            }
        }
    }


}
