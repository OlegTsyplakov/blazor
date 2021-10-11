export function faq() {
    
//Начало faq
var url = document.location.href;
var faq_num = 1;
$("#faq"+faq_num).fadeIn();
$("#rect"+faq_num).fadeIn();
var height = $(".faq-container-left").outerHeight();
$(".faq-container-right").css("height",height+"px");
$(".faq-container").on("click",".faq-container-item",function(){

var num = $(this).index();
showAnswer(num);
});


function showAnswer(num){
    var hide_show = $("#faq"+num).css("display");
  
    if (hide_show =="none"){
        $("#rect"+faq_num).fadeOut();
        $("#faq"+faq_num).fadeOut({complete:function(){
            $("#faq"+num).fadeIn();
            $("#rect"+num).fadeIn();
        }});
        faq_num = num;
    
      
    }
}



if(url.indexOf('#')!=-1){
    var faq = url.substr(url.indexOf('#faq'));
    var num = faq.substr(4);
    showAnswer(num);
}

if (window.location.hash != "" && window.location.hash == faq) {
    window.location.hash = ''; // for older browsers, leaves a # behind
    history.pushState('', document.title, window.location.pathname); // nice and clean
    e.preventDefault(); // no page reload
    }

//Конец faq

}