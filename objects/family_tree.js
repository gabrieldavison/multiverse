function familyFactory(name,parents) {
    return {
        name,
        parents,
        printParents: function() {
            this.parents.forEach(parent => console.log(parent.name))
        }
    }
}
const marge = familyFactory('Marge', [undefined, undefined])
const homer = familyFactory('homer', [undefined, undefined])

const bart = familyFactory('Bart', [marge, homer])

bart.printParents()