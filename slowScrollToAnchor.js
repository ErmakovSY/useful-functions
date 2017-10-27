/* 
  This function allows scroll slowly to anchor.
  Require: jQuery. 
*/

/* js */

slowScroll = (link) => {
  let id = $(link).attr('href');
  let topOfPage = $(id).offset().top;
  $('body,html').animate({
    scrollTop: topOfPage
  }, 700);
}

/* html */

/*
  <a onClick="slowScroll(this);" href="#main">Main</a>
*/