export function subcd2() {
//Начало прокрутки фото


$(".small-photo-container").on("mousewheel",function(e){
e = window.event || e;
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))); //это шаг колеса для разных браузеров
    this.scrollLeft -= (delta * 30); //прокручиваем всю страницу
		e.preventDefault();
});
//Конец прокрутки фото


//Начало смена фото
var main_photo = $(".main-photo-container img").attr("src");
$( ".small-photo" ).hover(
    function() {
        $(".main-photo-container img").hide().fadeIn();
      $(".main-photo-container img").attr("src", $(this).find('img').attr("src"));
          }, function() {
            $(".main-photo-container img").hide().fadeIn();
            $(".main-photo-container img").attr("src", main_photo);
    }
  );

//Конец смена фото
//Начало длинное описание
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

Array.from(items).forEach(item => item.addEventListener('click', toggleAccordion));
// Конец длинное описание
//Начало увеличение фото
var num_photo = $(".small-photo").length;
var pos;
var check_overlay= false;
$(".main-photo-container").click(function(e){
    overlay();
    
pos=0;
let target = $(e.target);
if ( target.is( "img" ) ) {
    if (num_photo>1){       
        $("#nav-left").css("display","inline-flex");   
        $("#nav-right").css("display","inline-flex");   
    }
    $(".small-photo-enlarge-container").fadeIn();
    $(".small-photo-enlarge-img").html(target.clone(false));       
}
});
$(".small-photo").click(function(e){
    overlay();
   
    pos = $(this).index();
    
    if (num_photo>1){
        
        $("#nav-left").css("display","inline-flex");   
        $("#nav-right").css("display","inline-flex");   
    }
    $(".small-photo-enlarge-container").fadeIn();
    let target = $(e.target);
  if ( target.is( "img" ) ) {
      $(".small-photo-enlarge-img").html(target.clone(false));       
}
});
$("#nav-left").click(function(){
    if (pos==0){pos=num_photo-1;}
    else if (pos<num_photo){pos--;}
    nav_left(pos,num_photo);
});
$("#nav-right").click(function(){
    if (pos==num_photo-1){pos=0;}
    else if (pos<num_photo){pos++;}
    nav_right(pos,num_photo);
});
function nav_right(pos,num_photo){
    var item = $(".small-photo")[pos].innerHTML;
    $(".small-photo-enlarge-img").fadeOut("slow",function(){
        $(".small-photo-enlarge-img").html(item);
    });
    $(".small-photo-enlarge-img").fadeIn();
}
function nav_left(pos,num_photo){
    var item = $(".small-photo")[pos].innerHTML;
    $(".small-photo-enlarge-img").fadeOut("slow",function(){
        $(".small-photo-enlarge-img").html(item);
    });
    $(".small-photo-enlarge-img").fadeIn();
}
function overlay(){
    if(!check_overlay){
      $('.skoba').prepend('<div id="overlay-article" style="display:flex;"></div>');
    }
      if (!$('body').hasClass("no-scroll")){
        removeScrollbar();
          $('body').addClass("no-scroll");
          }
          check_overlay= true;
          $(document).mouseup(function (e){ 
            var div = $(".small-photo-enlarge-container"); 
            if (!div.is(e.target) 
                && div.has(e.target).length === 0) { 
                    removeoverlay();
            }
        });
}
function removeoverlay(){
    if(check_overlay){
        addScrollbar();
        $('#overlay-article').remove();
        $('body').removeClass("no-scroll");
        $(".small-photo-enlarge-img").html("");
    $("#nav-left").css("display","none");   
    $("#nav-right").css("display","none"); 
    $(".small-photo-enlarge-container").fadeOut();
    }
check_overlay= false;
}

$(".small-photo-enlarge-x").click(function(){
    removeoverlay();
});
$("#overlay-article").click(function(){
    removeoverlay();
});
//Конец увеличение фото
// Начало читать дальше
$(".main-title-description").on("click","#readmore",function(){
    if ($("#readmore-container").css("display")=='none'){
        var height = $("#readmore-container").show().outerHeight();
        $("#readmore-container").hide();
        $("#readmore-container-height").css("height",height+"px");
        setTimeout(function()
{
    $("#readmore-container").fadeIn();
    $("#close").fadeIn();
    $("#readmore").fadeOut();
},600);
     
    }
   
    
      $("#close").click(function(){
        $("#readmore").fadeIn();
        $("#readmore-container").fadeOut({complete:function(){
            $("#readmore-container-height").css("height","0px");
        }});
        $("#close").fadeOut();
      });
  
    
  });
  // Конец читать дальше
  // Начало увеличение преймущества подробнее
var target_num2 = -1;
$(".advantage-info-more-purple-txt").on("click",function(e){
    if(target_num2 != -1){
        target_num2.parent().next().fadeOut();
    }
    let target = $(e.target);
    target.parent().next().fadeIn();
    target_num2 = target;
});
// Конец увеличение преймущества подробнее


// Начало товары
$(".ware_button").click(function(e){
    let target = $(e.target);
    let pos = target.index();
    if (target.hasClass("ware_button_inactive")){
        for (let i=0;i<$(".ware_button").length;i++){
            if ($(".ware_button")[i].classList.contains("ware_button_active")){
                $(".ware_button")[i].classList.remove("ware_button_active");
                $(".ware_button")[i].classList.add("ware_button_inactive");
                $(".descparam-item-container-ware")[i].classList.remove("ware_active");
                $(".descparam-item-container-ware")[i].classList.add("ware_inactive");
            }
          
        }
        target.removeClass("ware_button_inactive");
        target.addClass("ware_button_active");
        $(".descparam-item-container-ware")[pos].classList.remove("ware_inactive");
        $(".descparam-item-container-ware")[pos].classList.add("ware_active");
    }
    });
    //Конец товары


}