export abstract class Plot {
    protected flammable: boolean;
    protected burning: boolean;

    /**
     * Plot is a small division of Area. It can be set on fire if it is flammable
     * @constructor
     */
    protected constructor() {
        this.burning = false;
    }

    toString(): string {
        return Number(this.flammable).toString() + ' ' + Number(this.burning).toString();
    }

    setOnFire(): void {
        if (this.flammable) this.burning = true;
    }

    isFlammable(): boolean {
        return this.flammable;
    }

    isBurning(): boolean {
        return this.burning;
    }
}
