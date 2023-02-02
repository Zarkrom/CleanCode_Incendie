// Plot is a part of the Area,
// It has four types: Forest, Building, Field and Water
// It can be flammable or not and can be set on fire
export abstract class Plot {
    protected flammable: boolean;
    protected burning: boolean;

    public abstract color: string;

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
