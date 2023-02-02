import {Moutain} from "../models/Moutain";

describe('Building', () => {
    test('Building is not on fire by default', () => {
        const building = new Moutain();
        expect(building.isBurning()).toBeFalsy();
    });

    test('Building is flammable', () => {
        const building = new Moutain();
        expect(building.isFlammable()).toBeTruthy();
    });

    test('Plot is burning when it is on fire', () => {
        const building = new Moutain();

        building.setOnFire();

        expect(building.isBurning()).toBeTruthy();
    });

    test('toString', () => {
        const building = new Moutain();
        expect(building.toString()).toBeDefined();
        expect(building.toString().length >= 1).toBeTruthy();
    })
});
