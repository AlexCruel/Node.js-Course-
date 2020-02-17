const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const userOneid = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneid,
    name: 'Mike',
    email: 'mike@mail.com',
    password: 'adf32312qewasd',
    tokens: [{
        token: jwt.sign({ _id: userOneid }, process.env.JWT_SECRET)
    }]
}

beforeEach(async() => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async() => {
    await request(app).post('/users').send({
        name: 'Alex',
        email: 'sdыфasaсфыаваыываямsasdыasasddsd@gmail.com',
        password: 'asdasdqwe12312'
    }).expect(201)
})

test('Should login existing user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexisting user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'asddafsdf'
    }).expect(400)
})

test('Should get profile for user', async() => {
    await request(app).get('/ussers/me').send().expect(200)
})