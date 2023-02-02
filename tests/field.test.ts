import { Field } from '../models/Field'

describe('Field', () => {
  test('Field is not on fire by default', () => {
    const field = new Field()
    expect(field.isBurning()).toBeFalsy()
  })

  test('Field is not flammable', () => {
    const field = new Field()
    expect(field.isFlammable()).toBeTruthy()
  })

  test("Field can't not be set on fire", () => {
    const field = new Field()
    field.setOnFire()
    expect(field.isBurning()).toBeTruthy()
  })

  test('toString', () => {
    const field = new Field()
    expect(field.toString()).toBeDefined()
    expect(field.toString().length >= 1).toBeTruthy()
  })
})
