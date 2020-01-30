require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5e2f2c0809bb370eb067e9a0').then((user) => {
    console.log(user)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

test