// user interface logic
$(document).ready(function() {


  $('#startLogo').click(function() {
    $('#hideNote').fadeOut(2000);
    $('#menu').fadeIn(4000);

  });

  $('a#link_id').click(function(){
    window.open('url', 'wildlife.html');
    return false;
  });

  $('h1, h2, h3, h4, h5, h6').addClass('animated bounceInLeft');
  $('.contentDiv').addClass('animated fadeIn');

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
