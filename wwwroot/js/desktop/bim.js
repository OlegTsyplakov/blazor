export function bim(){
   let scripts = document.getElementsByTagName("script");
   let exists = false;
   let index = 0;

   while(index < scripts.length && !exists){
       exists = scripts[index].src.endsWith('https://bimlib.pro/dist/build/front_white/js/embed.js');
       index++;
   }

   if(!exists) {
       document.body.appendChild(
           Object.assign (
               document.createElement ('script'), {
                   src: 'https://bimlib.pro/dist/build/front_white/js/embed.js',
                   type: 'text/javascript'
               }));
       }
}