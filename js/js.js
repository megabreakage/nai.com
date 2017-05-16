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
});
