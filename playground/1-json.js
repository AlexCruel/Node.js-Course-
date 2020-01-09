const fs = require('fs')

const buffer = fs.readFileSync('1-json.json').toString()

const object = JSON.parse(buffer)

object.planet = 'Moon'

const send = JSON.stringify(object)

fs.writeFileSync('1-json.json', send)