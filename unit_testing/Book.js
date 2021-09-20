class Book {
    constructor({title, author, latestEdition=1}) {
        this.title = title,
        this.author = author,
        this.latestEdition = latestEdition
    }

    newEdition() {
        this.latestEdition += 1
    }
}
module.exports = Book