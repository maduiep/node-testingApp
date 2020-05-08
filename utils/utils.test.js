const expect = require('expect')
const utils = require('./utils')

it('should add two numbers', () => {
 var res = utils.add(33, 11)
 expect(res).toBe(44).toBeA('number')
})

it('should square a number', () => {
 let res = utils.square(5)
 expect(res).toBe(25).toBeA('number')
})

it('should asyncAdd two number', (done) => {
 utils.asyncAdd(4, 3, (sum) => {
  expect(sum).toBe(7).toBeA('number')
  done()
 })
})

it('should asyncSquare a number', (done) => {
 utils.asyncSquare(5, (mul) => {
  expect(mul).toBe(25).toBeA('number')
  done()
 })
})

/*
it('should expect some value', () => {
 expect(12).toNotBe(12)
 expect({ name: 'Madu' }).toEqual({ name: 'Madu' })
 expect([2, 3, 4]).toExclude(1)
 expect([2, 3, 4]).toInclude(5)

 expect({
  name: 'Emmanuel',
  age: 27,
  location: 'Enugu, Nigeria'
 }).toExclude({
  age: 25
 })
})
*/

it('should set firstName and lastName', () => {
 var user = { location: 'Enugu, Nigeria', age: 27 }
 var res = utils.setName(user, 'Emmnauel Madu')

 // expect(res).toInclude({
 //  firstName: 'Emmanuel',
 //  lastName: 'Madu'
 // })
 expect(res).toEqual(user)
})