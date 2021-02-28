var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});

$(window).on('load', () => {
    $('.color').fadeOut(500)
})

let counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++

    if(counter > 6) {
        counter = 1;
    }
}, 4000)