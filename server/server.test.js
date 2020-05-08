const request = require('supertest')
const expect = require('expect')

const app = require('./server').app

describe('Server', () => {

 describe('GET /', () => {
  it('should return Hello World response', (done) => {
   request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
     expect(res.body).toInclude({
      error: 'Page not found'
     })
    })
    .end(done)
  })
 })

 describe('GET /users', () => {
  it('should retun my user object', (done) => {
   request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
     expect(res.body).toInclude({
      name: 'Emmanuel',
      age: 27
     })
      .end(done)
    })
  })
 })
})

