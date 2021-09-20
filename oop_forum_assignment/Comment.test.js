const Comment = require('./Comment.js')
const User = require('./User.js')

test('sets text as property', () => {
    const testComment = new Comment({text: 'text'})
    expect(testComment.text).toBe('text')
})
test('sets author as property', () => {
    const testUser = new User('test')
    const testComment = new Comment({text:'text', author: testUser})

    expect(testComment.author).toBe(testUser)
})
test('sets date property', () =>{
    const testComment = new Comment({text: 'text'})
    expect(testComment.date).toEqual(Date())
})
test('sets id property', () => {

    const testComment = new Comment({text: 'text'})
    expect(testComment).toHaveProperty('id')
})