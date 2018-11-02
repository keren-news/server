require('dotenv').config()
const CLIENT_ID = process.env.CLIENT_ID_KERENNEWS
const User = require('../models/user')
const hashPassword = require('../helpers/hashPassword')
const mongoose = require('mongoose')
const isEmailExists = require('../helpers/isEmailExists')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

mongoose.connect('mongodb://localhost:27017/kerennews', { useNewUrlParser: true })

class Controller {
  static sayHi (req, res) {
    res.status(200).json({ message: 'hello madafaka' })
  }

  static register (req, res) {
    let hashed = hashPassword(req.body.password)
    let user = new User({
      name: req.body.name,
      password: hashed,
      email: req.body.email,
    })
    isEmailExists(user.email)
      .then(() => {
        user.save(err => {
          if (err) res.status(500).json(err)
          res.status(201).json({ message: 'user has successfully created!' })
        })
      })
      .catch(err => {
        res.status(400).json(err)
      })
  }

  static signInWithGoogle (req, res) {
    let gToken = req.body.token
    client.verifyIdToken({
      idToken: gToken,
      audience: CLIENT_ID
    }, (err, response) => {
      if (err) res.status(500).json(err)

      const payload = response.getPayload()
      console.log(payload)

      let user = {
        name: payload.name,
        email: payload.email
      }

      let createUser = new User(user)

      isEmailExists(user.email)
        .then(() => {
          createUser.save()
        })

      let jwtToken = jwt.sign(user, process.env.OUR_SECRET)
      res.status(200).json({ token: jwtToken })
    })
  }

  static login (req, res) {
    User.findOne({ email: req.body.email })
      .then(data => {
        let hash = data.password
        if (typeof data.password == undefined) {
          console.log(data)
          console.log('masuksini')
          res.status(400).json({ message: 'email / password is wrong!' })
        } else {
          console.log(hash)
          bcrypt.compare(req.body.password, hash)
            .then(isCorrect => {
              if (isCorrect) {
                // console.log(data)
                let jwtToken = jwt.sign({ name: data.name, email: data.email }, process.env.OUR_SECRET)
                res.status(200).json({ token: jwtToken })
              } else {
                return isCorrect
              }
            })
            .then(() => {
              res.status(400).json({ message: 'email / password is wrong!' })
            })
            .catch(err => {
              console.log(err)
              res.status(500).json(err)
            })
        }
      })
      .catch(err => {
        console.log(err)
        res.status(500).json(err)
      })
  }
}

module.exports = Controller
