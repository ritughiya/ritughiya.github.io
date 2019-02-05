$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// gradient JS

// $(document).mousemove(function(event) {
//   windowWidth = $(window).width();
//   windowHeight = $(window).height();
  
//   mouseXpercentage = Math.round(event.pageX / windowWidth * 300);
//   mouseYpercentage = Math.round(event.pageY / windowHeight * 300);
  
//   $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '10% ' + mouseYpercentage + '%, #ea5507, #4062a6)');
// });


// $(window).scroll(function() {
// var theta = ($(window).scrollTop() / 10 % Math.PI ) * 0.1;
// $('#card1').css({ transform: 'rotate(' + theta + 'rad)' });
// $('#card2').css({ transform: 'rotate(-' + theta + 'rad)' });
// });