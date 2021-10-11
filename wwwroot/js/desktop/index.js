export function index() {


var arrow_next = document.getElementsByClassName('arrow-next');
var arrow_prev = document.getElementsByClassName('arrow-prev');
var carousel_index = document.getElementsByClassName('carousel-index');

var first = 0;
var last = carousel_index.length-1;
var check_overlay = false;
var left= ["left:0;","left:33%;","left:66%"];
var i;


for (i=0;i<3;i++){
    
   carousel_index[i].setAttribute("style", left[i]);
  
carousel_index[i].id = 'id'+i;
   

}


imgclick();
function remap(){

   
    for (i=0;i<last;i++){
        if (i<3){
         
            carousel_index[i].setAttribute("style",left[i]);
            carousel_index[i].id='id'+i;
            
        }
        else{
          
         
            carousel_index[i].setAttribute("style", "left: 100%;");
            carousel_index[i].id='';
        }
        
     }
  
 
}
function remap_enlarge(){
     carousel_index = document.getElementsByClassName('carousel-index');
    
            $('#nav-left').remove();
            $('#nav-right').remove();
       
           
                carousel_index[0].setAttribute("style", "position: fixed;width: 95%;height: 50vh;z-index: 30001;pointer-events: none;top:50%;left:50%;transform:translate(-50%, -50%); ");
                carousel_index[0].firstElementChild.setAttribute("style", "width: 75%;");
                
        
                
            
          
            var childElement = carousel_index[0].querySelector(".carousel-container-3");
            var x = carousel_index[0].querySelector(".carousel-container-3-x");
            childElement.setAttribute("style", "pointer-events: auto;opacity: 1;");
            x.setAttribute("style", "pointer-events: all;z-index: 30002;");
         carousel_index[0].insertAdjacentHTML("beforeBegin",'<div id="nav-left"></div><div id="nav-right"></div>');
         navarrowleft();
         navarrowright();
            x.addEventListener('click', function(event) {
                
                clickX(event,carousel_index,childElement);
                });
   
}

function clickX(event,carousel_index,childElement){

    event.stopPropagation();
    carousel_index[0].setAttribute("style", "position: relative;display: flex;z-index: initial;");
    for(var i=0;i<carousel_index.length;i++)
    {
        carousel_index[i].firstElementChild.setAttribute("style", "width: 100%;");
    }
    
    childElement.setAttribute("style", "opacity: 0;");
    remap();
    removeoverlay();
}


var check_target_item_next = true;
var check_target_item_prev = true;
var check_enlarge = true;

arrow_next[0].addEventListener('click', function() {
    if(check_target_item_next){
        check_enlarge = false;
        check_target_item_next = false;
        target_item_next();
    }
    

});



arrow_prev[0].addEventListener('click', function() {
    if(check_target_item_prev){
        check_enlarge = false;
        check_target_item_prev = false;
        target_item_prev();
    }

});


function target_item_next(){
    var clone = carousel_index[first].cloneNode(true);
    
   
    
    carousel_index[0].setAttribute("style", "left: -33%;");
    carousel_index[1].setAttribute("style", "left: 0%;");
    carousel_index[2].setAttribute("style", "left: 33%;");
    carousel_index[3].setAttribute("style", "left: 66%;");
    document.getElementById('carousel-wrapper').appendChild(clone).setAttribute("style", "left: 100%;");
    
    
    
   
    setTimeout(function(){
        carousel_index[first].remove();
        remap();
        check_target_item_next = true;
        check_enlarge = true;
        },300);
        
}




function target_item_next_enlarge(){
    
    var clone = carousel_index[first].cloneNode(true);
    // carousel_index[first].setAttribute("style","opacity:0;")
    
    carousel_index[first].remove();
    document.getElementById('carousel-wrapper').appendChild(clone).setAttribute("style", "left: 100%;");
remap_enlarge();

}

function target_item_prev(){
 
    var clone = carousel_index[last].cloneNode(true);
    
    // $(j_carousel_index[last]).fadeTo( 300, 0, "linear" );
    carousel_index[last].remove();
 
    // var theFirstChild = document.getElementById('carousel-wrapper');
    document.getElementById('carousel-wrapper').prepend(clone);
    // document.getElementById('carousel-wrapper').insertBefore(clone, theFirstChild.nextSibling);
    carousel_index[first].setAttribute("style", "left: -33%;");
    carousel_index[first+2].setAttribute("style", "left: 100%;");
    setTimeout(function(){
        remap();
        check_target_item_prev = true;
        check_enlarge = true;
        },20);

}
function target_item_prev_enlarge(){
    
    var clone = carousel_index[last].cloneNode(true);
  
    // $(j_carousel_index[last]).fadeTo( 300, 0, "linear" );
    carousel_index[last].remove();
    
    // var theFirstChild = document.getElementById('carousel-wrapper');
    
  
   
    document.getElementById('carousel-wrapper').prepend(clone);
   
    carousel_index[first+1].setAttribute("style", "left: 100%;opacity:0;");
    setTimeout(function(){
        remap_enlarge();
        },50);
  

}

function imgclick(){
    $('.carousel-wrapper').on("click",".carousel-index",function(){
$('.carousel-container-3').on('click', function(event) {
    event.stopPropagation();
});
tofirst($(this).index());
overlay();
    });

    $(".carousel-all-wrapper").on("click","#overlay2",function(event){
        
        clickX(event,carousel_index,carousel_index[0].querySelector(".carousel-container-3"));
        });
}

function navarrowleft(){
    $('#nav-left').on('click', function() {
        target_item_prev_enlarge();
    });
}
function navarrowright(){
    $('#nav-right').on('click', function() {
        target_item_next_enlarge();
    });
}
function tofirst(i){
 
    $('#id0').off('click');
    $('#id1').off('click');
    $('#id2').off('click');
if (i>0)
{
    for(j=0;j<i;j++){
    
        clone = carousel_index[j].cloneNode(true);
      
       carousel_index[j].remove();
       document.getElementById('carousel-wrapper').appendChild(clone).setAttribute("style", "left: 100%;");
      
       j--;
i--;
}
}

remap_enlarge();
}



function overlay(){
  if(!check_overlay){
    $('.carousel-all-wrapper').prepend('<div id="overlay2" style="display:flex;"></div>');
    // $('.carousel-wrapper').css("transition","none");
  }
    if (!$('body').hasClass("no-scroll")){
        removeScrollbar();
        $('body').addClass("no-scroll");
        }
        check_overlay= true;
    }
    

    function removeoverlay(){
        if(check_overlay){
            $('#nav-left').remove();
            $('#nav-right').remove();
            $('.carousel-container-3').css("opacity","0");
            $('#overlay2').remove();
            $('body').removeClass("no-scroll");
            addScrollbar();
        }
              check_overlay= false;
          }
          
          

//Начало инфографика
$(function() {
var x = document.querySelectorAll('.infogra-popup-x');
var link = document.querySelectorAll('.infogra-id');
var link_img = document.querySelectorAll('.infogra-id-img');
var div = document.querySelectorAll('.infogra-container-popup');
var infogra_path = document.querySelectorAll('.infogra-path');

var check = false;
var num = -1;
var d = [
"M.5.5H147.67a7,7,0,0,1,7,7V247.33",
"M.5.5H77A11.88,11.88,0,0,1,88.87,12.38V232.66",
"M211.13.5H364.6s10.59.13,12.95,2.32c2.6,2.67,2.6,11.53,2.6,11.53v297s-2.1,4.7-3.13,5.63-5.66,2.3-5.66,2.3L.5,317.45",
"M.5.5H148.15",
"M268.48,19.83V7.5a7,7,0,0,0-7-7H.5",
"M.5,218.47H146.25a7,7,0,0,0,7-7V.5",
"M.5,218.47V.5",
"M324.15,365.5h55.5a17.51,17.51,0,0,0,17.5-17.5V18A17.51,17.51,0,0,0,379.65.5H.5",
"",
];

[].forEach.call(link, function(el, i) {
    ingograClick(el,i);
});
[].forEach.call(link_img, function(el, i) {
    ingograClick(el,i);
});


function ingograClick(el,i){
    el.onclick = function() {
        if (check) {
            infogra_path[num].classList.remove("svg-path"+i);
           
            infogra_path[num].removeAttribute('d');
            div[num].setAttribute("style", "opacity: 0;  pointer-events: none; ");
            x[num].setAttribute("style", "opacity: 0;");
        }
        
        
        infogra_path[i].classList.add("svg-path"+i); 
        infogra_path[i].setAttribute("d", d[i]);
        
        // var path = document.querySelector('.svg-path'+i);
        // console.log(path.getTotalLength());
        div[i].setAttribute("style", "opacity: 1;  pointer-events: all;");
        x[i].setAttribute("style", "opacity: 0.9;");
        check = true;
        num = i;
        
        
        }
}


[].forEach.call(x, function(el, i) {
el.onclick = function() {



infogra_path[i].classList.remove("svg-path"+i);
infogra_path[i].removeAttribute('d');


x[i].setAttribute("style", "opacity: 0;");
div[i].setAttribute("style", "opacity: 0;  pointer-events: none; ");
check = false;
num = -1;
}
});


});
//Конец инфографика

//Начало якорь Заказать проект
$(function() {
$('.infogra-rowlast').click(function() { $('html,body').animate({ scrollTop: $('.news-all').offset().top }, 500); });
});
//Конец якорь Заказать проект
//Начало Заказать проект






$(function() {
var pricecontainer = document.getElementsByClassName('price-container');
var typeofwork_button = document.getElementsByClassName('typeofwork-button');
var typeofservice_button = document.getElementsByClassName('typeofservice-button');
var typeofwork_button_on = [false,false,false,false];
var typeofwork_list = ['Отопление и/или «Тёплый пол»','Вентиляция','Водоснабжение и Канализация','Кондиционирование или «Холодный потолок»'];
var typeofwork_sum = [320,320,320,240];
var typeofservice_list = ['Концепция','Первоначальная спецификация','Проект стадии «Проект»'];
var typeofservice_sum = [0.3,0.5,1];
var typeofservice_button_on = [false,false,false];
var typeofwork_choosen = '';
var typeofwork_choosen_sum = 0;
var typeofservice_choosen = '';
var typeofservice_choosen_sum = 0;
var typeofwork_typeofservice_choosen_sum = 0;
var project_tel = 0;
var metr = 0;
var project_person_name = '';
var project_address = '';
var tel_validation = false;
var file_name = '';
var file_check = false;
var file_yesno = ['Да','Нет'];
$("#project-address").suggestions({
    token: "5fc1f6b84089fe974849befd3f4fe8af18819a1a",
    type: "ADDRESS",
       onSelect: function(suggestion) {
        $('#project-address').val(suggestion.value);
      
    }
});
$('.black-x').click(function() {
pricecontainer[0].setAttribute("style", "opacity: 0;  pointer-events: none;");
pricecontainer[1].setAttribute("style", "opacity: 0;  pointer-events: none;");
typeofwork_choosen = '';
typeofservice_choosen = '';
typeofwork_choosen_sum = 0;
typeofservice_choosen_sum = 0;
typeofwork_typeofservice_choosen_sum = 0;
});
$('.project-price').click(function() {
    typeofwork_choosen = '';
typeofservice_choosen = '';
typeofwork_choosen_sum = 0;
typeofservice_choosen_sum = 0;
typeofwork_typeofservice_choosen_sum = 0;
        project_price_calc();
   
});

function project_price_calc(){

    metr = document.getElementById('metr').value;
    document.getElementById('all-metr').innerHTML='Общая квадратура: <strong style="font-size:20px;">'+metr+'</strong> м&#178;';
    for(var count=0; count<typeofwork_button_on.length; count++){
    
    if (typeofwork_button_on[count]){
    typeofwork_choosen += '<div class="check-txt-black">- '+typeofwork_list[count]+'</div>';
    typeofwork_choosen_sum += metr*typeofwork_sum[count];
    }
    }
    for(var count=0; count<typeofservice_button_on.length; count++){
    
    if (typeofservice_button_on[count]){
    typeofservice_choosen += '<div class="check-txt-black">- '+typeofservice_list[count]+'</div>';
    typeofservice_choosen_sum += typeofwork_choosen_sum*typeofservice_sum[count];
    }
    }
    if(typeofservice_choosen_sum!=0){
        typeofwork_typeofservice_choosen_sum = typeofservice_choosen_sum;
    }
else{
    typeofwork_typeofservice_choosen_sum = typeofwork_choosen_sum;
    }
    document.getElementById('typeofwork-typeofservice-choosen-sum').innerHTML='<div class="check-txt-black-price"><strong>'+typeofwork_typeofservice_choosen_sum+'</strong> руб.</div>';
    document.getElementById('typeofservice-choosen').innerHTML=typeofservice_choosen;
    document.getElementById('typeofwork-choosen').innerHTML=typeofwork_choosen;
    pricecontainer[0].setAttribute("style", "opacity: 1;  pointer-events: all;");

}

function project_submit_calc(){
    typeofwork_choosen="";
    typeofservice_choosen="";
    typeofwork_choosen_sum = 0;
    typeofservice_choosen_sum = 0;
    metr = document.getElementById('metr').value;
    project_tel = document.getElementById('project-tel').value;
    project_person_name = document.getElementById('project-person-name').value;
    project_address = document.getElementById('project-address').value;
        for(var count=0; count<typeofwork_button_on.length; count++){
    
    if (typeofwork_button_on[count]){
    typeofwork_choosen += ' '+typeofwork_list[count]+' ';
    typeofwork_choosen_sum += metr*typeofwork_sum[count];
    }
    }
    for(var count=0; count<typeofservice_button_on.length; count++){
    
    if (typeofservice_button_on[count]){
    typeofservice_choosen += ' '+typeofservice_list[count]+' ';
    typeofservice_choosen_sum += typeofwork_choosen_sum*typeofservice_sum[count];
    }
    }
    typeofwork_typeofservice_choosen_sum = typeofwork_choosen_sum+typeofservice_choosen_sum;
    

}


[].forEach.call(typeofwork_button, function(el, i) {
el.onclick = function() {
if (typeofwork_button_on[i]){


typeofwork_button[i].setAttribute("style", "background: white; color: #0473bd;");
typeofwork_button_on[i] = false;
}
else{



typeofwork_button[i].setAttribute("style", "background: #0473bd; color: white;");
typeofwork_button_on[i] = true;
}

}
});


var typeofservice_button_check = false;
[].forEach.call(typeofservice_button, function(el, j) {
el.onclick = function() {

if ((!typeofservice_button_check) || (typeofservice_button_check && typeofservice_button_on[j]))    {
if (typeofservice_button_on[j]){
    typeofservice_button_check = false;
typeofservice_button[j].setAttribute("style", "background: white; color: #0473bd;");

typeofservice_button_on[j] = false;
}
else{

typeofservice_button[j].setAttribute("style", "background: #0473bd; color: white;");
typeofservice_button_on[j] = true;
typeofservice_button_check = true;
}
}
else if (typeofservice_button_check && !typeofservice_button_on[j]){


for ( i=0;i<typeofservice_button_on.length; i++){
if ( typeofservice_button_on[i]){
    typeofservice_button_on[i]=false;
    typeofservice_button[i].setAttribute("style", "background: white; color: #0473bd;");
 
}
}


    typeofservice_button[j].setAttribute("style", "background: #0473bd; color: white;");
    typeofservice_button_on[j] = true;
    typeofservice_button_check = true;
}


}
});

$("#project-toggle-state").click(function(){

if($("#project-toggle-state").prop("checked")){
    $(this).parent().next().text("Юридическое лицо");
}
else{
    $(this).parent().next().text("Физическое лицо");
}
});

$('#project-submit').click(function(){
    
    var file_check_yesno;
    if (tel_validation){
    project_submit_calc();
    var bp= $('#project-toggle-state').parent().next().text();
if (file_check){file_check_yesno = file_yesno[0];}
else{file_check_yesno = file_yesno[1];}
       
pricecontainer[1].setAttribute("style", "opacity: 1;  pointer-events: all;");
$('#message').html("<div id=\"loading\"></div>");


let formData = new FormData();    

var filesField = $("input[type='file']");
var fileName = filesField.attr('name');
var file = filesField.prop('files')[0];
formData.append(fileName, file) ;

formData.append("FIO", project_person_name);
formData.append("Phone", project_tel);
formData.append("Metr", metr);
formData.append("Address", project_address);
formData.append("Bp", bp);
formData.append("Typeofwork", typeofwork_choosen);
formData.append("Typeofservice", typeofservice_choosen);
formData.append("Price", typeofwork_typeofservice_choosen_sum);
formData.append("File_check_yesno", file_check_yesno);

function getJsdonFromFormData(formData){

    var object = {};
    formData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);

    // console.log(json);
     return json;
}

getJsdonFromFormData(formData);
var url = '/'+lang+'/RequestForm';
$.ajax({
    url: url,
    type: 'POST',
      data: formData,
     
    contentType: false,
    cache: false, 
    processData:false,
    
    success: function(){ 
        empty_fields();
       
      },
      error: function(){
        
        $('#message').html("Сообщение не отправлено!");
        pricecontainer[1].setAttribute("style", "opacity: 1;  pointer-events: all;");
      }   
}); 



 


function empty_fields() {
    $('.filename').text("");
    $('#message').html("Сообщение отправлено!");
    $('#project-person-name').val("");
    $('#project-address').val("");
    $('#metr').val("");
    $('#project-tel').val("");
    pricecontainer[1].setAttribute("style", "opacity: 1;  pointer-events: all;");
    for(var count=0; count<typeofwork_button_on.length; count++){
    
        if (typeofwork_button_on[count]){
            typeofwork_button[count].setAttribute("style", "background: white; color: #0473bd;");
            typeofwork_button_on[count] = false;
        }
        }
        for(var count=0; count<typeofservice_button_on.length; count++){
    
            if (typeofservice_button_on[count]){
                typeofservice_button[count].setAttribute("style", "background: white; color: #0473bd;");
                typeofservice_button_on[count] = false;
            }
            }

    typeofwork_choosen = '';
    typeofservice_choosen = '';
    typeofwork_choosen_sum = 0;
    typeofservice_choosen_sum = 0;
    typeofwork_typeofservice_choosen_sum = 0;
   
}  




    
    }
    else{
        showOnlyDigits();
    }
});




 
    $('input[type="file"]').change(function(){
    
        file_name = $("input[type='file']").val();
       file_name = file_name.replace(/C:\\fakepath\\/i, '');
       $('.filename').text(file_name.replace(/C:\\fakepath\\/i, ''));
       // $('.filename').text(file_name);
        file_check = true;
    });
 
    $('.delete-file').click(function(){
      
       $("input[type='file']").value = '';
        $('.filename').text("");
        file_check = false;
    })


    $( "#project-tel" ).change(function() {
        var patt = new RegExp(/^[\d\-%]+$/);
    var tel = document.getElementById('project-tel').value;
    tel_validation = patt.test(tel);
if(!tel_validation || tel==""){
    showOnlyDigits();
}
else{
    hideOnlyDigits();
}





    });

      


});

function showOnlyDigits(){
    $('.onlydigits').css("margin-bottom","20px").css("opacity","1");
    $('.onlydigits').text("Введите номер телефона правильно!");
}
function hideOnlyDigits(){
    $('.onlydigits').css("margin-bottom","0px").css("opacity","0");;
    $('.onlydigits').text("");
}


//Конец Заказать проект
}
