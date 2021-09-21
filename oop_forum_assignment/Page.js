const Post = require('./Post.js')
const Poll = require('./Poll.js')

class Page {
    constructor(title, posts) {
        this.title = title
        this.posts = {}
    }
    
    newPost({user, data}) {
        const post = new Post({...data, author:user})
        this.posts[post.id] = post
        return post
    }

    newPoll({user, data}) {
        const poll = new Poll({...data, author:user})
        this.posts[poll.id] = poll
        return poll
    }
    // Takes user object to check against author id before deleteing post (only the author can delete their own post)
    deletePost({user,id}) {
        const targetPost = this.posts[id]
        if(targetPost.author.id === user.id) {
            // removes post
            this.posts[id] = undefined
        } else {
            throw new Error('user id does not match author id')
        }
    }
}
module.exports = Page