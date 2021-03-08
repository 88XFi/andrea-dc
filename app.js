var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});

$(window).on('load', () => {
    $('.color').fadeOut(500);
    $('body').css({ overflowY: 'scroll' });
})

let counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++

    if(counter > 6) {
        counter = 1;
    }
}, 4000)

let tab = $('.tab').hide();

$('.menu').click(() => {
    $('.tab').slideToggle(1000);
});

/* function changeSize() {
    if (window.matchMedia('(max-width: 1100px)').matches) {
        $('.fb-post').attr('data-width', '350px');
    } else {
        $('.fb-post').attr('data-width', '500px');
    }
}

let x = window.matchMedia('(max-width: 1100px)');

$(document).ready(changeSize()) */

function resize() {
    
    let screenWidth = parseInt($('body').width());
    let fbPost = $('.fb-post');

    if (screenWidth < 1100) {
        fbPost.attr('data-width', '350');
    } else if (screenWidth > 1100) {
        fbPost.attr('data-width', '500');
    }
}

$(window).resize(() => {resize()});
$(document).ready(() => {resize()});