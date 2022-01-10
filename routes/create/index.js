'use strict'
const data = require('../../data')

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
    const todo = request.body
    const id = data.length + 1
    todo.id = id
    data.push(todo)
    return { data }
  })
}
