const Author = require('./Author')

test("sets name argument as property",() => {
    const testAuthor = new Author({name:'test',yearOfBirth: 1995})
    expect(testAuthor.name).toBe('test')
})

test("sets yearOfBirth argument as property", () => {
    const testAuthor = new Author({name:'test',yearOfBirth: 1995})
    expect(testAuthor.yearOfBirth).toBe(1995)
})