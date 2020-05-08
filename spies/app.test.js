const expect = require('expect')

const rewire = require('rewire')
var app = rewire('./app')


describe('App', () => {
 var db = {
  saveUser: expect.createSpy()
 }
 app.__set__('db', db)
 it('should call the spy correctly', () => {
  var spy = expect.createSpy()
  spy('Emmanuel', 27)
  expect().toHaveBeencalled('Emmanuel', 27)
 })

 it('should cal saveIser with user object', () => {
  var email = 'emmanuelmaduip@gamil.com'
  var password = '1234abcd'

  app.handleSignup(email, password)
  expect(db.saveUser).toHaveBeencalledWith({email, password})
 })
})