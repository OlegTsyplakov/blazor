export function orderandpayment(){
$(".more-icon").click(function(){
    var hide_show = $(this).parent().next(".schema-container-hide").css("display");
 
    if (hide_show =="none"){
        $(this).parent().next(".schema-container-hide").fadeIn();
        $(this).css("transform","rotate(90deg)");
       
    }
    else{
        $(this).parent().next(".schema-container-hide").fadeOut();
        $(this).css("transform","rotate(0deg)");
        
    }
   
});

}

