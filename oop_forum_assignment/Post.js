const Comment = require("./Comment")

class Post {
    constructor({title, text, author}) {
        this.title = title
        this.text = text
        this.id  = `post:${Math.random()}`
        this.date = Date()
        this.author = author
        this.comments = {}
        this.upvotes = {}
        this.downvotes = {}
    }
    newComment({user,data}) {
       const comment = new Comment({...data, author:user})
       this.comments[comment.id] = comment
       return comment
    }
    deleteComment({user,id}) {
        const targetComment = this.comments[id]
        if(targetComment.author.id === user.id) {
            // removes post
            this.comments[id] = undefined
        } else {
            throw new Error('user id does not match author id')
        }
    }
}
module.exports = Post