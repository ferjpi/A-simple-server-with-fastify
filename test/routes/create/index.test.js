'use strict'

const { test } = require('tap')
const { build } = require('../../helper')
const data = require('../../../data')

test('create is loaded', async (t) => {
  const app = build(t)
  const cData = [...data]

  const res = await app.inject({
    url: '/create',
    method: 'POST',
    payload: {
      'task': 'Write more code'
    }
  })

  cData.push({ task: 'Write more code', id: 3 })
  t.equal(res.payload, JSON.stringify({ data: cData }), 'add the new todo')
})

