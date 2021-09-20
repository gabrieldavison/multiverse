const Post = require('./Post.js')

class Page {
    constructor(title, posts) {
        this.title = title
        this.posts = {}
    }
    newPost({author, data}) {
        const post = new Post({...data, author})
        this.posts[post.id] = post
        return post
    }
}
module.exports = Page