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




/*
SELECT
*/

$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});