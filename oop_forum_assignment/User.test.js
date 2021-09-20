const User = require('./User')
const Post = require('./Post.js')
const Comment = require('./Comment.js')

test('sets username argument as property', () => {
    const testUser = new User('Test User')
    expect(testUser.username).toBe('Test User')
})

test('initializes with id property', () => {
    const testUser = new User('Test User')
    expect(testUser).toHaveProperty('id')
})
