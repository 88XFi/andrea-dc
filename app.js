var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});

$(window).on('load', () => {
    //changeSize();
    $('.color').fadeOut(500);
    $('body').css({ overflowY: 'scroll' });
});

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

/* function resize() {
    
    let screenWidth = parseInt($('body').width());
    let fbPost = $('.fb-post');

    if (screenWidth < 1100) {
        fbPost.attr('data-width', '350');
    } else if (screenWidth > 1100) {
        fbPost.attr('data-width', '500');
    }
}

$(window).resize(() => {resize()});
$(document).ready(() => {resize()}); */