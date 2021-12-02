let steps = $('.step-bar ul li');
console.log(steps);

// First step
$('.firstNext').on('click', (e) => {
   setTimeout(() => {
     $(steps[1]).find('.number').addClass('active');
   }, 1000);
  
   $(steps[1]).find('.line').addClass('line-active');
   $('.personal-data').css('left', '-4000px');
   $('.contact').css('left', 'calc(50% - 175px)');
});

// Second step
$('.secondNext').on('click', (e) => {
  setTimeout(() => {
    $(steps[2]).find('.number').addClass('active');
  }, 1000);
  
  $(steps[2]).find('.line').addClass('line-active');
  $('.contact').css('left', '-4000px');
  $('.finish-step').css('left', 'calc(50% - 175px)');
});

$('.firstPrev').on('click', (e) => {
  $(steps[1]).find('.number').removeClass('active');
  $(steps[1]).find('.line').removeClass('line-active');
  $('.contact').css('left', '4000px');
  $('.personal-data').css('left', 'calc(50% - 175px)');
});

// Last step
$('.secondPrev').on('click', (e) => {
  $(steps[2]).find('.number').removeClass('active');
  $(steps[2]).find('.line').removeClass('line-active');
  $('.finish-step').css('left', '4000px');
  $('.contact').css('left', 'calc(50% - 175px)')
});