/* 
  This code shows button-up, when user scrolls window more than "scrollTrigger" pixels.
  Require: jQuery. 
*/

/* js */

let scrollTrigger = 300, // distance from window top in px
backToTop = () => {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > scrollTrigger) {
    $('#button__page-up').addClass('is-visible');
  } else {
    $('#button__page-up').removeClass('is-visible');
  }
};
backToTop();
$(window).on('scroll', () => {
  backToTop();
});

$('#button__page-up').on('click', (e) => {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
})

/* html */

/*
  <button id="button__page-up"><i class="fa fa-angle-up" aria-hidden="true"></i></button>
*/