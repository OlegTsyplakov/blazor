export function subcd(){var tileview = false;
function checkView(){
if(tileview){
tileView();
}
else{
    detailView();
}
}
function tileView(){
    $(".filter-icon-column").css("opacity","1");
    $(".filter-icon-row").css("opacity","0.4");
    $("#detailView").css("opacity","0");
    $("#detailView").fadeOut();
    $("#detailView").css("display","none");
    $("#tileView").css("opacity","1");
    $("#tileView").fadeIn();
    $("#tileView").css("display","flex");
}
function detailView(){
    $(".filter-icon-row").css("opacity","1");
    $(".filter-icon-column").css("opacity","0.4");
    $("#tileView").css("opacity","0");
    $("#tileView").fadeOut();
$("#tileView").css("display","none");
$("#detailView").css("opacity","1");
    $("#detailView").fadeIn();
$("#detailView").css("display","flex");
}

    $(document).click(function (e) {
        if(!$(e.target).is(".calc-x") && !$(e.target).is(".description-info-more-purple-txt") && !$(e.target).hasClass("description-info-popup-container-active")){ 
      if ( $(e.target).closest('.description-info-popup-container').length === 0) {
      $(".description-info-popup-container").fadeOut();
      }
      }
    });
    $(document).on("click",".calc-x",function(e){
        if($(e.target).parent().hasClass("description-info-popup-container")){$(e.target).parent().removeClass("description-info-popup-container-active").fadeOut();}
    });

// Начало читать дальше
$(document).on("click","#readmore",function(){
    if ($("#readmore-container").css("display")=='none'){
        var height =  $("#readmore-container").show().outerHeight();
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
  // Начало читать дальше товаров
  $(".description-txt").on("click",".readmore-gray",function(e){
let target = $(e.target);
var height = target.parent().next().children(".description-txt-more").show().outerHeight();
target.parent().next().children(".description-txt-more").hide();
target.parent().next().css("height",height+"px");
setTimeout(function()
{
    target.parent().next().children(".description-txt-more").fadeIn();

    target.fadeOut();
},600);
  });
  $(".readmore-container-height").on("click",".readmore-gray-close",function(e){
    let target = $(e.target);
    setTimeout(function()
{
    target.parent().fadeOut({complete:function(){
        target.parent().parent().css("height","0px");
        target.parent().parent().prev(".description-txt").children(".readmore-gray").fadeIn();
    }});
},600);
  });
  // Конец читать дальше товаров
// Начало увеличение признаки подробнее
var target_num = -1;
$(".description-info-more-purple-txt").on("click",function(e){
    if(target_num != -1){
        target_num.parent().next().removeClass("description-info-popup-container-active").fadeOut();
    }
    let target = $(e.target);
    target.parent().next().addClass("description-info-popup-container-active").fadeIn();
    target_num = target;
});
// Конец увеличение признаки подробнее

// Начало фильтр
if ($(".check-box").is(':checked')){
    $(".filter-choose-container").css("opacity","1").css("height","100%").css("pointer-events","all").css("padding","10px");
        $(".white-arrow").css("transform","rotate(90deg)");
}

$(".filter-button-container").click(function(){
    if ($(".filter-choose-container").height()==0)
    {
        $(".filter-choose-container").css("opacity","1").css("height","100%").css("pointer-events","all").css("padding","10px");
        $(".white-arrow").css("transform","rotate(90deg)");
}
    else
    {
        $(".filter-choose-container").css("opacity","0").css("height","0").css("pointer-events","none").css("padding","0px");
        $(".white-arrow").css("transform","rotate(0deg)");
    }
});

$(document).on("click",".filter-icon-column",function(){
    if ( $("#tileView").css("display") == "none"){
        tileView();
        tileview = true;
    } 
});


$(document).on("click",".filter-icon-row",function(){
    if ( $("#detailView").css("display") == "none"){
        detailView();
        tileview = false;
}
    });


//Конец фильтр
// Начало товары
$(".descparam-container-ware").click(function(e){
    let target = $(e.target);
    let pos = target.index();
    let container = $(this).parent().find('.descparam-item-container-ware');
    if (target.hasClass("ware_button_inactive")){

        $(this).find('.ware_button').each(function(i,elem) {
            if (elem.classList.contains("ware_button_active")){
                elem.classList.remove("ware_button_active");
                elem.classList.add("ware_button_inactive");
                
                container[i].classList.remove("ware_active");
                container[i].classList.add("ware_inactive");
            }

        });      
        target.removeClass("ware_button_inactive");
        target.addClass("ware_button_active");
        container[pos].classList.remove("ware_inactive");
        container[pos].classList.add("ware_active");
    }
    });
    //Конец товары
}