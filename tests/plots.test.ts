const {Forest} = require('../models/Forest.js')
const {Building} = require('../models/Building.js');

describe('Plot', () => {
    test('Plot is not on fire by default', () => {
        const building = new Building();
        expect(building.isBurning()).toBeFalsy();
    });

    // test('Plot can be set on fire', () => {



    test('Plot not flammable cannot be set on fire', () => {
        const forest = new Forest();

        forest.setOnFire();

        expect(forest.isFlammable()).toBeFalsy();
        expect(forest.isBurning()).toBeFalsy();
    });
});
