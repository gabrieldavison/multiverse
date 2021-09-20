const sumOfOdd = require('./sumOfOdd.js')

test("sums array of odd numbers", () => {
    expect(sumOfOdd([1,3,5])).toBe(9)
})

test("doesnt sum even numbers", () => {
    expect(sumOfOdd([1,2,3,4,5])).toBe(9)
})