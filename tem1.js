function x() {
    var allChildren = item3.parentNode.children
    var array = {
        length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== item3) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
}