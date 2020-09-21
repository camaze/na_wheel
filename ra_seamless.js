// 可以随机跳转到任意图，也可以无缝 和style2.css/index.html搭配
let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

// 1 做些假图片
makeFakeSlides()

// 2 确定初始位置
$slides.hide().offset()
$slides.css({
    transform: 'translateX(-300px)'
})
$slides.show()

// 3 绑定按键事件
bindEvents()
$(next).on('click', function () {
    goToSlide(current + 1)
})

$(previous).on('click', function () {
    goToSlide(current - 1)
})

let timer = setInterval(function () {
    goToSlide(current + 1)
}, 1000)

$('.container').on('mouseenter', function () {
    window.clearInterval(timer)
}).on('mouseleave', function () {
    timer = setInterval(function () {
        goToSlide(current + 1)
    }, 1000)
})


/*  below are functions    */
function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    $slides.append($firstCopy) // 第一张放最后
    $slides.prepend($lastCopy) // 最后一张放最前
}

function bindEvents() {
    $('#buttonWrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}

function goToSlide(index) {
    if (index > $buttons.length - 1) {
        index = 0
    } else if (index < 0) {
        index = $buttons.length - 1
    }
    if (current === $buttons.length - 1 && index === 0) {
        // 最后一张到第一张
        $slides.css({
            transform: `translateX(${-($buttons.length + 1)*300}px)`
        }).one('transitionend', function () {
            $slides.hide().offset()
            $slides.css({
                transform: `translateX(${-(index+1)*300}px)`
            }).show()
        })
    } else if (current === 0 && index === $buttons.length - 1) {
        //第一张到最后一张
        $slides.css({
            transform: `translateX(0px)`
        }).one('transitionend', function () {
            $slides.hide().offset()
            $slides.css({
                transform: `translateX(${-(index+1)*300}px)`
            }).show()
        })
    } else {
        $slides.css({
            transform: `translateX(${-(index+1)*300}px)`
        })
    }
    current = index
}


// $buttons.eq(0).on('click', function () {
//     if (current === 2) {
//         console.log('说明是从最后一张到第一张')
//         $slides.css({
//             transform: 'translateX(-1200px)'
//         }).one('transitionend', function () {
//             // 变完之后回到真实的第一张
//             $slides.hide().offset()
//             $slides.css({
//                 transform: 'translateX(-300px)'
//             }).show()
//         })
//     } else {
//         $slides.css({
//             transform: 'translateX(-300px)'
//         })
//     }
//     current = 0
// })

// $buttons.eq(1).on('click', function () {
//     $slides.css({
//         transform: 'translateX(-600px)'
//     })
//     current = 1
// })

// $buttons.eq(2).on('click', function () {
//     $slides.css({
//         transform: 'translateX(-900px)'
//     })
//     current = 2
// })
// }