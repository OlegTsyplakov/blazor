export function cd() {

// Начало читать дальше
$(".main-title-description").on("click","#readmore",function(){
    if ($("#readmore-container").css("display")=='none'){
      var height = $("#readmore-container").show().outerHeight();
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
//Начало длинное описание
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

Array.from(items).forEach(item => item.addEventListener('click', toggleAccordion));
// Конец длинное описание


    

    $(".wrapper-cat").on("click","label",function(){
     
      var height = $(this).children(".content").outerHeight();

      $(this).css("height",height+40+"px");
    });
    }