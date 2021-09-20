const Book = require('./Book')
const Author = require('./Author')

test('sets title argument as property', () => {
    const testAuthor = new Author({name: 'test author', yearOfBirth: '1995'})
    const testBook = new Book({title: 'test book', author: testAuthor})
    expect(testBook.title).toBe('test book')
})

test('sets author argument as property', () => {
    const testAuthor = new Author({name: 'test author', yearOfBirth: '1995'})
    const testBook = new Book({title: 'test book', author: testAuthor})
    expect(testBook.author).toBe(testAuthor)
})

test('sets latestEdition argument as property', () => {
    const testAuthor = new Author({name: 'test author', yearOfBirth: '1995'})
    const testBook = new Book({title: 'test book', author: testAuthor, latestEdition: 5})
    expect(testBook.latestEdition).toBe(5)
})

test('sets latestEdition property to 1 if not supplied as an argument', () => {
    const testAuthor = new Author({name: 'test author', yearOfBirth: '1995'})
    const testBook = new Book({title: 'test book', author: testAuthor})
    expect(testBook.latestEdition).toBe(1)
})

test('newEdition method increments latestEdition property by 1', () => {
    const testAuthor = new Author({name: 'test author', yearOfBirth: '1995'})
    const testBook = new Book({title: 'test book', author: testAuthor})
    testBook.newEdition()
    expect(testBook.latestEdition).toBe(2)
})