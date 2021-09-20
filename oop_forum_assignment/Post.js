const Comment = require("./Comment")

class Post {
    constructor({title, text}) {
        this.title = title
        this.text = text
        this.id  = `post:${Math.random()}`
        this.date = Date()
        this.comments = {}
        this.upvotes = {}
        this.downvotes = {}
    }
    newComment({text, author}) {
       const comment = new Comment({text, author})
       this.comments[comment.id] = comment
       return comment
    }
}
module.exports = Post