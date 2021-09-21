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
    const testPost = testPage.newPost({user:testUser, data: {title:'Test Title', text: 'Test Text', author: testUser}})
    expect(testPage.posts[testPost.id]).toEqual(testPost)
})

test('newPoll() adds poll to posts object', () => {
    const testPage = new Page('Test Page')
    const testUser = new User('Test User')
    const testPoll = testPage.newPoll({
        user:testUser, 
        data: {title:'Test Title', 
        text: 'Test Text', 
        author: testUser,
        options: ['option1','option2']}})
    expect(testPage.posts[testPoll.id]).toEqual(testPoll)
})

test('deletePost deletes specified post', () => {
    const testPage = new Page('Test Page')
    const testUser = new User('Test User')
    const testPost = testPage.newPost({user:testUser, data: {title:'Test Title', text: 'Test Text', author: testUser}})
    testPage.deletePost({user:testUser, id:testPost.id})
    expect(testPage.posts[testPost.id]).toBe(undefined)
})

test('deletepost throws error if user.id and author.id arent mathcing', () => {
    const testPage = new Page('Test Page')
    const testUser = new User('Test User')
    const incorrectUser = new User('Incorrect User')
    const testPost = testPage.newPost({user:testUser, data: {title:'Test Title', text: 'Test Text', author: testUser}})
    expect(() => testPage.deletePost({user:incorrectUser, id:testPost.id})).toThrow()
})