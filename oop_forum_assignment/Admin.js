const User = require('./User.js')

class Admin extends User {
    constructor() {
        super(User)
    }
}

module.exports = Admin