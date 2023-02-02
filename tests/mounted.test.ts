import { Mountain } from '../models/Mountain'

describe('Building', () => {
  test('Building is not on fire by default', () => {
    const building = new Mountain()
    expect(building.isBurning()).toBeFalsy()
  })

  test('Building is flammable', () => {
    const building = new Mountain()
    expect(building.isFlammable()).toBeFalsy()
  })

  test('Plot is burning when it is on fire', () => {
    const building = new Mountain()

    building.setOnFire()

    expect(building.isBurning()).toBeFalsy()
  })

  test('toString', () => {
    const building = new Mountain()
    expect(building.toString()).toBeDefined()
    expect(building.toString().length >= 1).toBeTruthy()
  })
})
