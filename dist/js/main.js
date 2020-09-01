$(function(){
 $.extend($.expr[':'], {
  'off-top': function (el) { // проверка того, что элемент достиг верха экрана
   return $(el).offset().top < $(window).scrollTop();
  },
  'off-top-height': function (el) { // проверка того, что весь элемент ушел за верхний край экрана
   return ($(el).offset().top + $(el).outerHeight()) < $(window).scrollTop();
  }
 });

});
$(document).ready(function () {
 $(document).scroll(function () {
  if ($('div.header__nav').is(":off-top-height")) {
   
  }
 });
});
