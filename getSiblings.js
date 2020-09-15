/*获得一个节点的兄弟节点*/

function getSiblings(node) {
    /*API*/
    var allChildren = node.parentNode.children
    var array = {
        length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    return array
}