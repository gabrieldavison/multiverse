const Comment = require('./Comment.js')
const Post = require('./Post.js')
class User {
    constructor(username) {
        this.username = username
        this.id = `user:${Math.random()}`
    }
}
module.exports = User