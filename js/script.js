AOS.init({
    duration: 800,
    easing: 'slide',
    once : true
});



$(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 63) {
      $('.navbar').addClass('navbar-fixed');
      $('.nav-link').addClass('text-dark');
    }
    if ($(window).scrollTop() < 64) {
      $('.navbar').removeClass('navbar-fixed');
      $('.nav-link').addClass('text-dark');
    }
  });


  
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
})