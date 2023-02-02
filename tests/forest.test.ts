import {Forest} from "../models/Forest";

describe('Forest', () => {
    test('Forest is not on fire by default', () => {
        const forest = new Forest();
        expect(forest.isBurning()).toBeFalsy();
    });

    test('Forest is flammable', () => {
        const forest = new Forest();
        expect(forest.isFlammable()).toBeTruthy();
    });

    test('Forest is can be set on fire', () => {
        const forest = new Forest();
        forest.setOnFire();
        expect(forest.isFlammable()).toBeTruthy();
        expect(forest.isBurning()).toBeTruthy();
    });

    test('toString', () => {
        const forest = new Forest();
        expect(forest.toString()).toBeDefined();
        expect(forest.toString().length >= 1).toBeTruthy();
    })
});
