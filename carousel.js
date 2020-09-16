var allButtons = $('#buttons > span')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) { //被点击事件
        var index = $(x.currentTarget).index() //获取在父元素那里排行老几
        var p = index * -300
        $('#images').css({
            transform: 'translateX(' + p + 'px)' //???
        })
        n = index
        activeButton(allButtons.eq(n)) //变红操作
    })
}

var n = 0
var size = allButtons.length // 共多少图
playSlide(n % size)
var timerId = setTimer()

function setTimer() {
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 1000)
}

function playSlide(index) {
    allButtons.eq(index).trigger('click') // 触发被点击事件
}

function activeButton($Button) {
    $Button.addClass('red').siblings('.red').removeClass('red') //激活为红，兄弟为灰
}

$('.window').on('mouseenter', function () {
    window.clearInterval(timerId) // 砸闹钟
})

$('.window').on('mouseleave', function () {
    timerId = setTimer() //砸完再造闹钟
})