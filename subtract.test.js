const { test } = require('@jest/globals')
const subtract = require('./subtract')


test('properly subtracts two numbers', () => {
    expect(sum(4, 2)).toBe(2)
})
