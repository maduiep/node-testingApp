const request = require('supertest')

const app = require('./server').app

it('should return hello world response', (done) => {
 request(app)
  .get('/')
  .expect('Hello Wolrd')
})