const bcrypt = require('bcrypt')
const saltRounds = 10

function hashIt(password) {
  let hash = bcrypt.hashSync(password, saltRounds)
  return hash
}

module.exports = hashIt
