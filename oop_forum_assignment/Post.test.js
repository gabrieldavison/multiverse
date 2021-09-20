const Comment = require('./Comment.js')
const Post = require('./Post.js')
const User = require('./User')

test('sets title argument as property',() => {
    const testPost = new Post({
        title: 'Test Title',
        text: 'This is a testPost',
    })
    expect(testPost.title).toBe('Test Title')
})

test('sets text argument as property',() => {
    const testPost = new Post({
        title: 'Test Title',
        text: 'This is a testPost',
    })
    expect(testPost.text).toBe('This is a testPost')
})

test('sets date property', () => {
    const testPost = new Post({
        title: 'Test Title',
        text: 'This is a testPost',
    })
    expect(testPost.date).toEqual(Date())
})

test('sets id property', () => {
    const testPost = new Post({
        title: 'Test Title',
        text: 'This is a testPost',
    })
    expect(testPost).toHaveProperty('id')
})

test('sets comments property to empty object', () => {
    const testPost = new Post({
        title: 'Test Title',
        text: 'This is a testPost',
    }) 
    expect(testPost.comments).toEqual({})
})

test('newComment adds comment to comments object', () => {
    const testUser = new User('Test User')
    const testPost = new Post({
        title: 'Test Title',
        text: 'This is a testPost',
        author: testUser
    }) 
    const testComment = testPost.newComment({text: 'This is a test comment.', author: testUser})
    expect(testPost.comments[testComment.id]).toEqual(testComment)
})

test('upvotes initialized as empty hash table', () => {
    const testPost = new Post({
        title: 'Test Title',
        text: 'This is a testPost',
    }) 
    expect(testPost.upvotes).toEqual({})
})

test('downvotes initialized as empty hash table', () => {
    const testPost = new Post({
        title: 'Test Title',
        text: 'This is a testPost',
    }) 
    expect(testPost.downvotes).toEqual({})
})