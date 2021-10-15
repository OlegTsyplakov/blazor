export function documents(){
// Начало документы
$(function() {
var items = document.getElementsByClassName('doc-item-container');
var num = items.length;
var number_containers = 4;
var left= ["left:1%;opacity:1;","left:26%;opacity:1;","left:51%;opacity:1;","left:76%;opacity:1;"];
var first = 0;
var last = num-1;

if (num==1){
    items[0].setAttribute("style", "left:38%;opacity:1;"); 
}
if (num==2){
    items[0].setAttribute("style", "left:25%;opacity:1;"); 
    items[1].setAttribute("style", "left:51%;opacity:1;"); 
}
if (num==3){
    items[0].setAttribute("style", "left:14.5%;opacity:1;"); 
    items[1].setAttribute("style", "left:38.5%;opacity:1;");
    items[2].setAttribute("style", "left:62.5%;opacity:1;");
}
if (num==4){
    items[0].setAttribute("style", "left:1%;opacity:1;"); 
    items[1].setAttribute("style", "left:26%;opacity:1;");
    items[2].setAttribute("style", "left:51%;opacity:1;");
    items[3].setAttribute("style", "left:76%;opacity:1;");
}
if (num>number_containers){
    $("#doc-right-arrow").css("opacity", "0.8").css("pointer-events", "all");
    $("#doc-left-arrow").css("opacity", "0.8").css("pointer-events", "all");
function map(){
    for(var i=0; i<num; i++){
        if (i<number_containers){
       
        items[i].setAttribute("style", left[i]);
        }
        else{
           
            items[i].setAttribute("style", "left:100%;opacity:0;");
        }
       
    }
}
    map();
    var clicked = false;
    $("#doc-right-arrow").on("click",function(){
        if (!clicked) {
            clicked = true;
            var clone = items[first].cloneNode(true);



        
            items[first].setAttribute("style", "left:-25%;opacity:1;");
            items[first+1].setAttribute("style", "left:1%;opacity:1;");
            items[first+2].setAttribute("style", "left:26%;opacity:1;");
            items[first+3].setAttribute("style", "left:51%;opacity:1;");
            items[first+4].setAttribute("style", "left:76%;opacity:1;");
            clone.setAttribute("style", "left:100%;");
            document.getElementById('doc-items-container-show').appendChild(clone);
           
            setTimeout(function(){
                items[first].remove();
        map();
        clicked = false;
                },600);


        }
       
               
      
        
    });
    $("#doc-left-arrow").on("click",function(){
        if (!clicked) {
            clicked = true;
            var clone = items[first].cloneNode(true);
        
        var clone = items[last].cloneNode(true);
        items[last].remove();
        clone.setAttribute("style", "left:-25%;");
        document.getElementById('doc-items-container-show').prepend(clone);
  
        
        setTimeout(function(){
    map();
    clicked = false;
            },400);

        }
       });
}
});
//Конец документы
}