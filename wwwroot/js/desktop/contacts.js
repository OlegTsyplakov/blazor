export function contacts() {
// Начало tabs дилеры
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

Array.from(items).forEach(item => item.addEventListener('click', toggleAccordion));
    
//Конец  tabs дилеры 

}