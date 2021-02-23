var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});

$(window).on('load', () => {
    $('.color').fadeOut(500)
})