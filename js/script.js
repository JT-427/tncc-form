let steps = $('.step-bar ul li');
console.log(steps);

// First step
$('.firstNext').on('click', (e) => {
   setTimeout(() => {
     $(steps[1]).find('.number').addClass('active');
   }, 1000);
  
   $(steps[1]).find('.line').addClass('line-active');
   $('.personal-data').css('left', '-200%');
   $('.contact').css('margin', 'auto');
   $('.contact').css('left', 0);
   $('.contact').css('right', 0);
});

// Second step
$('.secondNext').on('click', (e) => {
  setTimeout(() => {
    $(steps[2]).find('.number').addClass('active');
  }, 1000);
  
  $(steps[2]).find('.line').addClass('line-active');
  $('.contact').css('left', '-200%');
  $('.finish-step').css('margin', 'auto');
  $('.finish-step').css('left', 0);
  $('.finish-step').css('right', 0);
});

$('.firstPrev').on('click', (e) => {
  $(steps[1]).find('.number').removeClass('active');
  $(steps[1]).find('.line').removeClass('line-active');
  $('.contact').css('left', '200%');
  $('.personal-data').css('margin', 'auto');
  $('.personal-data').css('left', 0);
  $('.personal-data').css('right', 0);
});

// Last step
$('.secondPrev').on('click', (e) => {
  $(steps[2]).find('.number').removeClass('active');
  $(steps[2]).find('.line').removeClass('line-active');
  $('.finish-step').css('left', '200%');
  $('.contact').css('margin', 'auto');
  $('.contact').css('left', 0);
  $('.contact').css('right', 0);
});