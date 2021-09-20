class Comment {
    constructor({text, author}) {
        this.text = text
        this.date = Date()
        this.author = author
        this.id = `comment:${Math.random()}`
    }
}
module.exports = Comment