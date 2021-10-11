export function video(){
// Начало видео

$(".video-item-container").click(function(){
  var next_video_src = $(this).find(".video-item-next-noclick").attr("src");

  var next_video_title = $(this).find(".video-item-next-title").text();
  
$(".video-title").text(next_video_title);
$("#first-video").attr("src",next_video_src+"&autoplay=1");
$("#first-video").load();
    
});

  var video_height = $("#first-video").height();
  $(".video-items-container").height(video_height);
  window.onresize = function () {
      var video_height = $("#first-video").height();
      $(".video-items-container").height(video_height);
    }

//Конец видео
}