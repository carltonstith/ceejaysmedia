(function($) {

  var allPanels = $('ol > p').hide();
  
  $('ol > li > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
  
  });

}) ($);