export function comments() {

//Начало комментировать
$('.comment').on('click', function() {
    $('.articles-comments-container').toggleClass('articles-comments-container_active');
  });
  $('.articles-comments-container').on('click',".calc-x", function() {
    $('.articles-comments-container').toggleClass('articles-comments-container_active');
  });
  $('.articles-comments-submit').on('click', function() {
    $(".articles-comments-name").css("border-color","");
    $(".articles-comments-text").css("border-color","");
    if(!$(".articles-comments-name").val()){
      $(".articles-comments-name").css("border-color","red");
      return;
    }
    if(!$(".articles-comments-text").val()){
      $(".articles-comments-text").css("border-color","red");
      return;
    }
  });

 
  //Конец комментировать
}
