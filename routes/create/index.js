'use strict'
const data = require('../../data')

// JSON-schema
// it is use to validate the input of the data
// in this case the request's body
const schema = {
  schema: {
    body: {
      type: 'object',
      required: ['task'],
      additionalProperties: false,
      properties: {
        task: { type: 'string' }
      }
    }
  }
}

module.exports = async function (fastify, opts) {
  fastify.post('/', schema, async function (request, reply) {
    // Get the body from the request
    const todo = request.body

    // Calculate the unique ID for the todo
    const id = data.length + 1
    // Assign the regenerated ID to the todo
    todo.id = id
    // Add the new todo to the list of todos
    data.push(todo)

    // return the list of todos with the new todo
    return { data }
  })
}
