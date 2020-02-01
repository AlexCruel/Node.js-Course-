require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e2f2c0809bb370eb067e9a0').then((user) => {
//     console.log(user)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const findByIdAndDelete = async(id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments(completed)
    return count
}

findByIdAndDelete('5e2f2c17c968951a4828c881', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})