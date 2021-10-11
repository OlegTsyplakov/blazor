//Начало показ адресов Сдэк
export function delivery_options(){
$("#do-see-all").click(function(){
    cdekAddressShow();
    cdek_modal = true;  
});
$(".do-map").click(function(){
    var target = $(this);
var address = target.text();
var work_hours = target.attr("data-work_hours");
var coordinates = target.attr("data-coordinates");
    $(".cartpopup-empty-container").fadeIn();
    $(".cartpopup-empty-container").html("<div id=\"loading\"></div>");
    $(".cartpopup-empty-container").load("/"+lang+"/DeliveryMap",{address,coordinates,work_hours},function(){
    setTimeout(function() {
    $("ymaps").addClass("x");
    }, 600);
    
    });
  
});

}
//Конец показ адресов Сдэк