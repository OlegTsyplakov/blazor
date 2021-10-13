export function article() {
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
      $('body').prepend('<div id="overlay-article" style="display:flex;"></div>');
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
//Начало увеличение чертежа
var num2 = $(".drawing-container").length;
var pos2;
var check_overlay2= false;
$(".drawing-container").click(function(e){
overlay2();

pos2 = $(this).index()-1;

if (num2>1){

$("#nav-left2").css("display","inline-flex");   
$("#nav-right2").css("display","inline-flex");   
}
$(".small-photo-enlarge-container2").fadeIn();
let target = $(e.target);
if ( target.is( "img" ) ) {
$(".small-photo-enlarge-img2").html(target.clone(false));       
}
});
$("#nav-left2").click(function(){
if (pos2==0){pos2=num2-1;}
else if (pos2<num2){pos2--;}
nav_left2(pos2,num2);
});
$("#nav-right2").click(function(){
if (pos2==num2-1){pos2=0;}
else if (pos2<num2){pos2++;}
nav_right2(pos2,num2);
});
function nav_right2(pos2,num2){
var item = $(".drawing-container")[pos2].innerHTML;
$(".small-photo-enlarge-img2").fadeOut("slow",function(){
$(".small-photo-enlarge-img2").html(item);
});
$(".small-photo-enlarge-img2").fadeIn();
}
function nav_left2(pos2,num2){
var item = $(".drawing-container")[pos2].innerHTML;
$(".small-photo-enlarge-img2").fadeOut("slow",function(){
$(".small-photo-enlarge-img2").html(item);
});
$(".small-photo-enlarge-img2").fadeIn();
}
function overlay2(){
if(!check_overlay2){
$('.skoba').prepend('<div id="overlay-article2" style="display:flex;"></div>');
}
if (!$('body').hasClass("no-scroll")){
    removeScrollbar();
    $('body').addClass("no-scroll");
  
    }
    check_overlay2= true;
    $(document).mouseup(function (e){ 
    var div = $(".small-photo-enlarge-container2"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
            removeoverlay2();
    }
});
}
function removeoverlay2(){
if(check_overlay2){
    addScrollbar();
$('#overlay-article2').remove();
$('body').removeClass("no-scroll");
$(".small-photo-enlarge-img2").html("");
$("#nav-left2").css("display","none");   
$("#nav-right2").css("display","none"); 
$(".small-photo-enlarge-container2").fadeOut();
}
check_overlay2= false;
}

$(".small-photo-enlarge-x2").click(function(){
removeoverlay2();
});
$("#overlay-article2").click(function(){
removeoverlay2();
});
//Конец увеличение чертежа

// Начало читать дальше
$(".descparam-item-container").on("click","#readmore",function(){
    if ($("#readmore-container").css("display")=='none'){
        var height = $("#readmore-container").height();
        $("#readmore-container-height").css("height",height+20+"px");
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
// Начало описание параметры


$(".parametrs").click(function(){
if ($("#parametrs").css("display")=="none"){
    var height2 = $("#description").outerHeight();
  

    $("#description").animate({
        opacity: "0"
      }, 600).promise()
      .done(
          function() {

       $("#description").css("display","none");
        $("#parametrs").css("display","flex");
         height =$(".descparam-container2").css("height","auto").outerHeight();
         $(".descparam-container2").css("height",height2+"px");
            
    $("#parametrs").animate({
        opacity: "1"
      }, 600).promise()
      .done(
          function(){
            $(".descparam-container2").css("height",height+"px");
    
      });
    $(".descparam-item-line").css("left","75%");
   
      });

$(".parametrs").css("color","white").css("background-color","#8f65ad");
$(".description").css("color","#8f65ad").css("background-color","#e4dee8");
}
});



$(".description").click(function(){
if ($("#description").css("display")=="none"){
    var height2 = $("#parametrs").outerHeight();


    $("#parametrs").animate({
        opacity: "0"
      }, 600).promise()
      .done( 
      function() {
        $("#parametrs").css("display","none");
        $("#description").css("display","flex");
        var height =$(".descparam-container2").css("height","auto").outerHeight();
        $(".descparam-container2").css("height",height2+"px")
       
    $("#description").animate({
        opacity: "1"
      }, 600).promise()
      .done(
          function(){
            $(".descparam-container2").css("height",height+"px");
      
      });
    $(".descparam-item-line").css("left","5%");
    
      });

$(".description").css("color","white").css("background-color","#8f65ad");
$(".parametrs").css("color","#8f65ad").css("background-color","#e4dee8");
}


});
//Конец описание параметры
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
