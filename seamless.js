// setTimeout(() => {
//     $('.images>img:nth-child(1)').addClass('current')
//     $('.images>img:nth-child(2)').addClass('wait')
//     $('.images>img:nth-child(3)').addClass('wait')
// }, 20)

// $('.images>img:nth-child(1)').addClass('current')
// $('.images>img:nth-child(2)').addClass('wait')
// $('.images>img:nth-child(3)').addClass('wait')

let n
init()
setInterval(() => {
    // $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave') //一旦离开就进入等待区
    makeLeave(getImage(n)).one('transitionend', (e) => {
        makeWait($(e.currentTarget))
    })
    makeCurrent(getImage(n + 1))
    n += 1
}, 2000)
















function getImage(n) {
    return $(`.images>img:nth-child(${x(n)})`)
}

function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n
}

function init() {
    n = 1
    $(`.images>img:nth-child(${x(n)})`).addClass('current').siblings().addClass('wait')
}

function makeCurrent($node) {
    $node.removeClass('wait leave').addClass('current')
    return $node
}

function makeLeave($node) {
    $node.removeClass('wait current').addClass('leave')
    return $node
}

function makeWait($node) {
    $node.removeClass('leave current').addClass('wait')
    return $node
}