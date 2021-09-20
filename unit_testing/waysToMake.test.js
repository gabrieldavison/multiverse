const waysToMake = require('./waysToMake')

test('works on small array of numbers', () => {
    expect(waysToMake(4,[2,1])).toBe(3)
})

test('works on larger array of numbers', () => {
    expect(waysToMake(8,[4,2,1])).toBe(9)
})

test('works on larger array of numbers', () => {
    expect(waysToMake(200,[200, 100, 50, 20, 10, 5, 2, 1])).toBe(73682)
})
//111111111 
//111111111 