import { Building } from "../models/Building";
import { Field } from "../models/Field";
import { Water } from "../models/Water";
import { Forest } from "../models/Forest";
import { Plot } from "../models/Plot";

describe('Plot', () => {
    test('Plot is not on fire by default', () => {
        let plot = new Building();
        expect(plot.isBurning()).toBeFalsy();
    });

    // test('Plot can be set on fire', () => {



    test('Plot not flammable cannot be set on fire', () => {
        let plot: Plot = new Forest();

        plot.setOnFire();

        expect(plot.isFlammable()).toBeFalsy();
        expect(plot.isBurning()).toBeFalsy();
    });
});
