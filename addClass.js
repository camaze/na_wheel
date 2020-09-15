/* classes 为{a:true, b:false, c:true} 的格式，表示新增加class为a和c   */

function addClass(node, classes) {
    for (let key in classes) {
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        node.classList[methodName](key)
    }
}