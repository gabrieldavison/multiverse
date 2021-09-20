function arrayToLinkedList(arr) {
    return arr.reduceRight((acc,curr, i) => {
        return {
            value: curr,
            next: i === arr.length -1 ? null : acc
        }
    }, {})
}

const ll = arrayToLinkedList([1,2,3,4,5])

function iterateLinkedList(node, fn) {
    if(node === null) return
    fn(node)
    iterateLinkedList(node.next, fn)
}

// iterateLinkedList(ll, (node) => console.log(node.value))

function partitionList(node, v) {
    let lHead = undefined
    let left = undefined
    let rHead = undefined
    let right = undefined

    const split = (current) => {
        if(current.value < v) {
            if(left === undefined) lHead = current
            else left.next = current
            left = current
        } else {
            if(right === undefined) rHead = current
            else right.next = current
            right = current
        }
    }
    iterateLinkedList(node, split)

    left.next = rHead
    rHead.next = null
    return lHead
}

log(partitionList(
    arrayToLinkedList([1,4,19,3,8,16,4]),
    7
))

/////// logs nested objects
function log(val) {
    console.dir(val, {depth: null})
}