const Post = require('./Post.js')

class Poll extends Post {
    constructor({options}) {
        super(Post)
        this.options = options.reduce((acc, curr) => {
            acc[curr] = 0
            return acc
        },{})
    }
    incrementOption(option) {
        if(this.options[option] !== undefined) {
            this.options[option] +=1
        } else {
            throw new Error('Option does not exist')
        }
    }
}
module.exports = Poll