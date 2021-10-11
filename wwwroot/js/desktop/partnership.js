export function partnership(){
// Начало читать дальше
$(document).on("click","#readmore",function(){
  if ($("#readmore-container").css("display")=='none'){
    $("#readmore-container").fadeIn();
    $("#replace").html("<br>&nbsp;&nbsp;&nbsp;&nbsp;Компания все эти годы активно развивалась в оптовом секторе, распространяя, проектируя и монтируя собственную продукцию во множестве узнаваемых строительных объектов, недвижимости класса «бизнес», такие как: ");
    $("#close").fadeIn();
    $("#readmore").fadeOut();
  }
 
  
    $("#close").click(function(){
      $("#readmore").fadeIn();
      $("#replace").html("<br>&nbsp;&nbsp;&nbsp;&nbsp;Компания все эти годы активно развивалась в оптовом секторе, распространяя, проектируя и монтируя собственную продукцию во множестве узнаваемых строительных объектов,  недвижимости класса «бизнес», такие как:<div class=\"readmore\" id=\"readmore\">далее ...</div>");
      $("#readmore-container").fadeOut();
      $("#close").fadeOut();
    });

  
});
// Конец читать дальше
// Начало описание скидки

$(".condition").click(function(){
  if ($("#conditions").css("opacity")==0){
   
  

    if ($("#description").css("opacity")==0){
      $("#parametrs").css("opacity","0");

      setTimeout( function(){
        $('#parametrs').hide();
           },600);
      $("#parametrs").css("pointer-events","none");
      $(".parametrs").css("color","#555").css("border","1px solid #ddd");
}
else{
  $("#description").css("opacity","0");

  setTimeout( function(){
    $('#description').hide();
       },600);
  $("#description").css("pointer-events","none");
  $(".description").css("color","#555").css("border","1px solid #ddd");
}


  
     
      setTimeout( function(){
        $('#conditions').show();
        $('#conditions').css("display","flex");
           },600);
           

    $("#conditions").css("opacity","1");
    $("#conditions").css("pointer-events","auto");
    $(".condition").css("color","#0473bd").css("border","1px solid #c8c8c8");
  }
});
$(".parametrs").click(function(){
    if ($("#parametrs").css("opacity")==0){
     
    
    


        if ($("#description").css("opacity")==0){
          $("#conditions").css("opacity","0");
    
          setTimeout( function(){
            $('#conditions').hide();
               },600);
          $("#conditions").css("pointer-events","none");
          $(".condition").css("color","#555").css("border","1px solid #ddd");
    }
    else{
      $("#description").css("opacity","0");
    
      setTimeout( function(){
        $('#description').hide();
           },600);
      $("#description").css("pointer-events","none");
      $(".description").css("color","#555").css("border","1px solid #ddd");
    }


        setTimeout( function(){
          $('#parametrs').show();
          $('#parametrs').css("display","flex");
             },600);
            

      $("#parametrs").css("opacity","1");
      $("#parametrs").css("pointer-events","auto");
      $(".parametrs").css("color","#0473bd").css("border","1px solid #c8c8c8");
    }
});
$(".description").click(function(){
    if ($("#description").css("opacity")==0){

  
    

        if ($("#parametrs").css("opacity")==0){
          $("#conditions").css("opacity","0");
    
          setTimeout( function(){
            $('#conditions').hide();
               },600);
          $("#conditions").css("pointer-events","none");
          $(".condition").css("color","#555").css("border","1px solid #ddd");
    }
    else{
      $("#parametrs").css("opacity","0");
    
      setTimeout( function(){
        $('#parametrs').hide();
           },600);
      $("#parametrs").css("pointer-events","none");
      $(".parametrs").css("color","#555").css("border","1px solid #ddd");
    }







        setTimeout( function(){
          $('#description').show();
             },600);
            
         
            
      $("#description").css("opacity","1");
      $("#description").css("pointer-events","auto");
      $(".description").css("color","#0473bd").css("border","1px solid #c8c8c8");
    }
    
  
});
//Конец описание скидки
// Начало скидки
var sale  = document.getElementsByClassName('trial');
var nosale= document.getElementsByClassName('nosale');
var sale2  = document.getElementsByClassName('trial2');
var nosale2= document.getElementsByClassName('nosale2');





$("#partnership-toggle-state").click(function(e){
  let target = $(e.target);
  if(target.is("#partnership-toggle-state")){
  if($("#partnership-toggle-state").is(':checked')){
    for(var i=0;i<sale.length;i++){
      nosale[i].setAttribute("style","display:none;");
      sale[i].setAttribute("style","display:inline-block;");
      $("#partnership-sale-nosale").text("со скидкой");
  }
    
  }
  else{
    $("#partnership-sale-nosale").text("без скидки");
    
  for(var i=0;i<sale.length;i++){
    sale[i].setAttribute("style","display:none;");
    nosale[i].setAttribute("style","display:inline-block;");
 
  }
}
  }
  });

  $("#partnership-toggle-state2").click(function(e){
    let target = $(e.target);
    if(target.is("#partnership-toggle-state2")){
    if($("#partnership-toggle-state2").is(':checked')){
      for(var i=0;i<sale2.length;i++){
    
        nosale2[i].setAttribute("style","display:none;");
        sale2[i].setAttribute("style","display:inline-block;");
      

    } 
    
    $("#bronze").css("left","100px"); 
    $("#partnership-sale-nosale2").text("скидка"); 
    }
    else{
    
      for(var i=0;i<sale2.length;i++){
        sale2[i].setAttribute("style","display:none;");
        nosale2[i].setAttribute("style","display:inline-block;");
    } 
    $("#bronze").css("left","60px");  
    $("#partnership-sale-nosale2").text("бонус");  
     
    
  }
    }
    });




//Конец скидки



}