export function share(){
   let scripts = document.getElementsByTagName("script");
   let exists = false;
   let index = 0;

   while(index < scripts.length && !exists){
       exists = scripts[index].src.endsWith('https://yastatic.net/share2/share.js');
       index++;
   }

   if(!exists) {
       document.body.appendChild(
           Object.assign (
               document.createElement ('script'), {
                   src: 'https://yastatic.net/share2/share.js',
                   type: 'text/javascript'
               }));
       }
}