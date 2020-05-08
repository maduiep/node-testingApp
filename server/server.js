const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.statusCode(404).send({
 error: 'Page not found',
 name: 'Todo App v1.0'
}))

app.get('/users', (req, res) => {
 res.send([{
 name: 'Madu',
 age: 27
 }, {
 name: 'Jamsine',
 age: '24'
  }, {
   name: 'Courage',
   age: 27
}])
})
app.listen(port, () => console.log(` listening to sever port ${port}!`))

module.exports.app = app