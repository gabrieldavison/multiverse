const Page = require('./Page.js')

class Forum {
    constructor() {
        this.users = [],
        this.pages = []
    }

    addUser(user) {
        this.users.push(user)
    }

    addPage(page) {
        this.pages.push(page)
    }
}

module.exports = Forum