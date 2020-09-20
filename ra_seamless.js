// 可以随机跳转到任意图，也可以无缝 和style2.css/index.html搭配
let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstCopy = $images.eq(0).clone(true)
let $lastCopy = $images.eq($images.length - 1).clone(true)

$slides.append($firstCopy)
$slides.prepend($lastCopy)

$slides.hide().offset()
$slides.css({
    transform: 'translateX(-300px)'
})
$slides.show()



let current = 0

$buttons.eq(0).on('click', function () {
    if (current === 2) {
        console.log('说明是从最后一张到第一张')
        $slides.css({
            transform: 'translateX(-1200px)'
        })
    } else {
        $slides.css({
            transform: 'translateX(-300px)'
        })
    }
    current = 0
})

$buttons.eq(1).on('click', function () {
    $slides.css({
        transform: 'translateX(-600px)'
    })
    current = 1
})

$buttons.eq(2).on('click', function () {
    $slides.css({
        transform: 'translateX(-900px)'
    })
    current = 2
})