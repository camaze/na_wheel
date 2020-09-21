// var a = 99; // 全局变量a
// f(); // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。 
// console.log(a); // a=>99,  此时是全局变量的a
// function f() {
//     console.log(a); // 当前的a变量是下面变量a声明提升后，默认值undefined
//     //   var a = 10;
//     console.log(a); // a => 10
// }

// window.jQuery = function (nodeOrSelector) {
//     let nodes = {}
//     if (typeof nodeOrSelector === 'string') {
//         let temp = document.querySelectorAll(nodeOrSelector)
//         for (let i = 0; i < temp.length; i++) {
//             nodes[i] = temp[i]
//         }
//         nodes.length = temp.length
//         console.log(nodes)
//     } else if (nodeOrSelector instanceof Node) {
//         nodes = {
//             0: nodeOrSelector,
//             length: 1
//         }
//     }
//     nodes.addClass = function (classes) {
//         // 每个节点均加一个类
//         classes.forEach((value) => {
//             for (let i = 0; i < nodes.length; i++) {
//                 nodes[i].classList.add(value)
//             }
//         });
//     }
//     nodes.getText = function () {
//         var texts = []
//         for (let i = 0; i < nodes.length; i++) {
//             texts.push(nodes[i].textContent)
//         }
//         return texts
//     }
//     nodes.setText = function (text) {
//         for (let i = 0; i < nodes.length; i++) {
//             nodes[i].textContent = text
//         }
//     }
//     nodes.text = function (text) {
//         if (text === undefined) {
//             // 如果是 node2.text()说明想要text
//             var texts = []
//             for (let i = 0; i < nodes.length; i++) {
//                 texts.push(nodes[i].textContent)
//             }
//             return texts
//         } else {
//             // 如果是 node2.text('aaa') 说明想把文本内容设置为aaa
//             for (let i = 0; i < nodes.length; i++) {
//                 nodes[i].textContent = text
//             }
//         }
//     }
//     return nodes
// }
// var node2 = jQuery('ul > li')
// node2.addClass(['blue'])
// node2.text('hi')



{
    /* <ul>
      <li id="item1">选项1</li>
      <li id="item2">选项2</li>
      <li id="item3">选项3</li>
      <li id="item4">选项4</li>
      <li id="item5">选项5</li>
    </ul> */
}

//在函数外使用let关键字声明变量test_var
let test_var = "函数外的test_var";
//定义函数testFun
function testFun() {
    //打印输出test_var
    console.log(test_var);
    //在函数内使用let关键字声明变量test_var
    // let test_var = "函数内的test_var"
    //打印输出test_var
    test_var = 'aaa'
    console.log(test_var);
}
//函数执行
testFun();