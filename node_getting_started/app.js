const { INSPECT_MAX_BYTES } = require('buffer');
const c = require('chalk')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const log = console.log;

const colors = ['red','blue','green']

// gets random item from array
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// prompts user for input and logs it back in a random color
function prompt() {
    rl.question(c.black.bold.underline.bgWhite("Write something:") + " ", (str) => {
        log(c[getRandom(colors)](str))
        prompt()
    } )
}
prompt()