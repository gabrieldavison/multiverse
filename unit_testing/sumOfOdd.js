function sumOfOdd(arr) {
    return arr.reduce((acc,curr) => {
        if(curr % 2 === 0) return acc
        else return acc += curr
    }, 0)
}

module.exports = sumOfOdd