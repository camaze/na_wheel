setTimeout(() => {
    $('.images>img:nth-child(1)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').on('transitionend', function (e) {
        $(e.currentTarget).addClass('right').css({
            transform: 'none'
        })
    })
}, 3000)

setTimeout(() => {
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-200%)'
    })
    $('.images>img:nth-child(3)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').on('transitionend', function (e) {
        $(e.currentTarget).addClass('right').css({
            transform: 'none'
        })
    })
}, 6000)

setTimeout(() => {
    $('.images>img:nth-child(3)').css({
        transform: 'translateX(-200%)'
    })
    $('.images>img:nth-child(1)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(3)').on('transitionend', function (e) {
        $(e.currentTarget).addClass('right').css({
            transform: 'none'
        })
    })
}, 9000)