import Book from './Book.mjs'
import Author from './Author.mjs'

const a1 = new Author({name: 'J.R.R Tolkein', yearOfBirth: 1892})
const b1 = new Book({title: 'The Lord of The Rings', author: a1, latestEdition: 10})

b1.newEdition()

console.log(b1)