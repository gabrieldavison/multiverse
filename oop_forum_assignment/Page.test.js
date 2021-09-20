const Page = require('./Page.js')
const Post = require('./Post.js')
const User = require('./User.js')

test('title argument creates title property', () => {
    const testPage = new Page('Test Page')
    expect(testPage.title).toBe('Test Page')
})

test('initialized with empty posts object', () => {
    const testPage = new Page('Test Page')
    expect(testPage.posts).toEqual({})
})

test('newPost() adds post to posts object', () => {
    const testPage = new Page('Test Page')
    const testUser = new User('Test User')
    const testPost = testPage.newPost({title:'Test Title', test: 'Test Text', author: testUser})
    expect(testPage.posts[testPost.id]).toEqual(testPost)
})

test('deletePost deletes specified post', () => {
    const testPage = new Page('Test Page')
    const testUser = new User('Test User')
    const testPost = testPage.newPost({title:'Test Title', test: 'Test Text', author: testUser})
    testPage.deletePost({user:testUser, id:testPost.id})
    expect(testPage.posts[testPost.id]).toBe(undefined)
})