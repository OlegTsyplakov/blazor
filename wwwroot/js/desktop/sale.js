export function sale() {

// Начало переключения сетка ряд
$(".filter-icon-column").click(function(){
    if ( $(".sale-all-container-column").css("display") == "none"){
        $(".sale-icon-column").css("opacity","1");
        $(".sale-icon-row").css("opacity","0.6");
        $(".sale-all-container-row").css("opacity","0");
        $(".sale-all-container-row").fadeOut();
        $(".sale-all-container-row").css("display","none");
        $(".sale-all-container-column").css("opacity","1");
        $(".sale-all-container-column").fadeIn();
        $(".sale-all-container-column").css("display","flex");
    }
   
        
 

});
$(".filter-icon-row").click(function(){
    if ( $(".sale-all-container-row").css("display") == "none"){
        $(".sale-icon-row").css("opacity","1");
        $(".sale-icon-column").css("opacity","0.6");
        $(".sale-all-container-column").css("opacity","0");
        $(".sale-all-container-column").fadeOut();
    $(".sale-all-container-column").css("display","none");
    $(".sale-all-container-row").css("opacity","1");
        $(".sale-all-container-row").fadeIn();
    $(".sale-all-container-row").css("display","flex");
}
    });
//Конец переключения сетка ряд

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
//Конец фильтр

}
