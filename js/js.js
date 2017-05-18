// user interface logic
$(document).ready(function() {


  $('#startLogo').click(function() {
    $('#hideNote').fadeOut(3000);
    $('#menu').fadeIn(8000);

  });

  $('a#link_id').click(function(){
    window.open('url', 'wildlife.html');
    return false;
  });

  //add classes to html elements
  $('.animatedPic, .frame img').addClass('animated bounceIn');
  $('h1, h2, h3, h4, h5, h6').addClass('animated wow bounceInLeft');
  $('.contentDiv1, .contentDiv2').addClass('animated wow fadeIn');
  $('p').addClass('animated wow fadeIn');
  $('.slideFrame').addClass('animated wow bounceIn');

  // for loading elements on viewport
  new WOW().init();

  //START SMOOTH SCROLLING

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 2000, function() {
        });
      }
    }
  });
  //END!

});
