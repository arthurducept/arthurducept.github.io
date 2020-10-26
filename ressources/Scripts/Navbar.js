$('document').ready(function() {
    $('.menu-toggle').click(function() {
        $('nav').toggleClass('active')
        $('.hamburger').toggleClass('is-active')
    })
})