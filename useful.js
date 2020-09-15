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

console.log(getSiblings(item3))

/* classes 为{a:true, b:false, c:true} 的格式，表示新增加class为a和c   */

function addClass(node, classes) {
    for (let key in classes) {
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        node.classList[methodName](key)
    }
}
// addClass(item3, {a:true,b:false, c:true})
// console.log(item3)

window.ffdom = {}
ffdom.getSiblings = getSiblings
ffdom.addClass = addClass

ffdom.getSiblings(item3)
ffdom.addClass(item3, {
    a: true,
    b: false,
    c: true
})