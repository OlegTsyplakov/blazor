export function converter(){
var pressure = ["0.00001","0.01","1","0.001","0.000001","0.00000010197162129779","0.000010197162129779","0.0000098692326671599","0.0075006375541919","0.00010197162129779","0.10197162129779","0.00014503789114906"];
var vol_flow = ["0.00027777777777778","0.016666666666667","1","24","8766.0000000002","0.27777777777778","16.666666666667","1000","24000","8766000"];
var temp = ["-438.07","-261.15","12"];
var vol = ["1000000000","1000000","1","0.001","0.000000001","1"];
var length = ["0.001","10","1","100","1000"];
var cons = ["1000","1.1630611770179","1","0.0011630611770179","0.001","0.0000011630611770179","0.000001","3.9683647359851"];
var all_arr =[pressure,vol_flow,temp,vol,length,cons];

function inputShow(num){
    $(".converter-all-input-container").each(function(index){
     
if(index==num){

    $(this).css("display","flex");
}
else{
    $(this).css("display","none");
}

    });
}
function inputFill(arr,num,input_num,val){
   
    
    if(num==2){
if(input_num==0){
    $("#cel").val(((val - 32) / 1.8).toFixed(2));
    $("#kel").val(((val - 32) / 1.8 + 273.15).toFixed(2));
}
if(input_num==1){
    $("#far").val((val* 1.8 + 32 ).toFixed(2));
    $("#kel").val((val + 273.15).toFixed(2));
}
if(input_num==2){
    $("#far").val((val* 1.8 - 459.67).toFixed(2));
    $("#cel").val((val - 273.15).toFixed(2));
}
    }else{
let one_unit = val/all_arr[num][input_num];
arr.each(function(index){
    if(input_num!=index){
 let result = one_unit*all_arr[num][index]
$(this).children("input").val(result);
}
});
}
}

    inputShow(0);
    let num = 0;
   
       $(".converter-all-title-container").on("click",".converter-title-container",function(e){
        let target = $(e.target);
        target.parent().children().each(function(){
            $(this).removeClass("active");
        });
        target.addClass("active");
        num = target.index();
        inputShow(num);
       });
       $(".converter-all-input-container").on("keyup","input",function(e){
      
   
        let target = $(e.target);
        let val = target.val().replace(',', '.');
        if(!isNaN(val) && val!=""){
        val = parseFloat(val);
        let input_num = target.parent().index();
       let arr = target.parent().parent().children();
        inputFill(arr,num,input_num,val);
    }
       
       
       });

}