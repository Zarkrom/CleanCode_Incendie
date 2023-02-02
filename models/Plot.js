// Plot is a part of the Area,
// It has four types: Forest, Building, Field and Water
// It can be flammable or not and can be set on fire
var Plot = /** @class */ (function () {
    function Plot() {
        this.burning = false;
    }
    Plot.prototype.toString = function () {
        return Number(this.flammable).toString() + ' ' + Number(this.burning).toString();
    };
    Plot.prototype.setOnFire = function () {
        if (this.flammable)
            this.burning = true;
    };
    Plot.prototype.isFlammable = function () {
        return this.flammable;
    };
    Plot.prototype.isBurning = function () {
        return this.burning;
    };
    return Plot;
}());
export { Plot };
//# sourceMappingURL=Plot.js.map