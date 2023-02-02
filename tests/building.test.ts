import { Building } from '../models/Building'

describe('Building', () => {
  test('Building is not on fire by default', () => {
    const building = new Building()
    expect(building.isBurning()).toBeFalsy()
  })

  test('Building is flammable', () => {
    const building = new Building()
    expect(building.isFlammable()).toBeTruthy()
  })

  test('Plot is burning when it is on fire', () => {
    const building = new Building()

    building.setOnFire()

    expect(building.isBurning()).toBeTruthy()
  })

  test('toString', () => {
    const building = new Building()
    expect(building.toString()).toBeDefined()
    expect(building.toString().length >= 1).toBeTruthy()
  })
})
