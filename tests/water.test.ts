import {Water} from "../models/Water";

describe('Water', () => {
    test('Water is not on fire by default', () => {
        const water = new Water();
        expect(water.isBurning()).toBeFalsy();
    });

    test('Water is flammable', () => {
        const water = new Water();
        expect(water.isFlammable()).toBeFalsy();
    });

    test('Water is can be set on fire', () => {
        const water = new Water();
        water.setOnFire();
        expect(water.isFlammable()).toBeFalsy();
        expect(water.isBurning()).toBeFalsy();
    });

    test('toString', () => {
        const water = new Water();
        expect(water.toString()).toBeDefined();
        expect(water.toString().length >= 1).toBeTruthy();
    })
});
