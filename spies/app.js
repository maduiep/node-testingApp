const deb = require('./db')

module.exports.handleSinup = (email, password) => {
 // check if the email exits
 // save the user to the database
 db.saveUser({
  email,
  password
 })
 // send the welcome eamil
}