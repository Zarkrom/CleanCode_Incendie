import { Building } from "./Building";
import { Field } from "./Field";
import { Water } from "./Water";
import { Forest } from "./Forest";
// Area contains a board of plots
var Area = /** @class */ (function () {
    function Area() {
        this.plots = []; // grid of plots
        // Generate a random area
        // For each plot, add a random plot in plots
        for (var lineIndex = 0; lineIndex < 5; lineIndex++) {
            var line = [];
            for (var plotIndex = 0; plotIndex < 5; plotIndex++) {
                line.push(this.getRandomPlot());
            }
            this.plots.push(line);
        }
    }
    // Choose a random plot
    // If it's flammable, set it on fire
    // If not, call function again and try on another plot
    Area.prototype.setFireRandomly = function () {
        var randomX = Math.floor(Math.random() * 5);
        var randomY = Math.floor(Math.random() * 5);
        var randomPlot = this.plots[randomX][randomY];
        if (randomPlot.isFlammable() == false || randomPlot.isBurning() == true) {
            this.setFireRandomly();
        }
        else {
            randomPlot.setOnFire();
        }
    };
    Area.prototype.getRandomPlot = function () {
        var allPlots = [
            new Building(),
            new Building(),
            new Field(),
            new Water(),
            new Forest(),
            new Forest(),
        ];
        var randomType = Math.floor(Math.random() * 5);
        return allPlots[randomType];
    };
    // Get each fired plot of the area and spread fire around it
    Area.prototype.spreadFire = function () {
        for (var _i = 0, _a = this.plots; _i < _a.length; _i++) {
            var line = _a[_i];
            for (var _b = 0, line_1 = line; _b < line_1.length; _b++) {
                var plot = line_1[_b];
                if (plot.isBurning()) {
                    // Get coords
                    var x = this.plots.indexOf(line);
                    var y = line.indexOf(plot);
                    // Fire will spread on plots near the fired plot
                    var plotsToFire = [];
                    if (x != 0) {
                        plotsToFire.push(this.plots[x - 1][y]);
                    }
                    if (x != this.plots.length - 1) {
                        plotsToFire.push(this.plots[x + 1][y]);
                    }
                    if (y != 0) {
                        plotsToFire.push(this.plots[x][y - 1]);
                    }
                    if (y != this.plots[0].length - 1) {
                        plotsToFire.push(this.plots[x][y + 1]);
                    }
                    // Spread fire
                    for (var _c = 0, plotsToFire_1 = plotsToFire; _c < plotsToFire_1.length; _c++) {
                        var plot_1 = plotsToFire_1[_c];
                        plot_1.setOnFire();
                    }
                }
            }
        }
    };
    return Area;
}());
export { Area };
//# sourceMappingURL=Area.js.map