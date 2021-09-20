function waysToMake(target, [first, ...rest]) {
    // console.log(target, [first, ...rest])
    // if(first === undefined) return 0
    // if(target % first === 0) return 1 + waysToMake(first, rest) + waysToMake(target, rest)
    // else return waysToMake(target, rest)

    //number of way to make the target starting from each item in the array (only including the items < the first item in the array)
    // sort array
    //subtract first from target
    // call ways to make with new target 
    // call ways to make with next number in array
    
    if(first === undefined) return 0
    

}
// 8, [4,2,1]
// 8 [2,1]

module.exports = waysToMake