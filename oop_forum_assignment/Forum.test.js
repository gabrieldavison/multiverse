const Forum = require('./Forum.js')
const Page = require('./Page')
const User = require('./User.js')

test('addPage method adds new page to pages array', () => {
    const testForum = new Forum()
    const testPage = new Page('Test Page')
    testForum.addPage(testPage)
    expect(testForum.pages).toEqual([testPage])
})

test('addUser adds new user to users array', () => {
    const testForum = new Forum()
    const testUser = new User('Test User')
    testForum.addUser(testUser)
    expect(testForum.users).toEqual([testUser])
})