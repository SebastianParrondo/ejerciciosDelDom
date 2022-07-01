const d = document,
 w = window;
 export default function responsiveMedia(id, mq, mobileContent, desktopContent){
     let breakPoint = w.matchMedia(mq);

     

     const remover = (e) =>{
         if(e.matches){
             d.getElementById(id).innerHTML = desktopContent;
             //console.log("mq:", e.matches);
         }else{
            d.getElementById(id).innerHTML = mobileContent;
            //console.log("mq:", e.matches);
         }

     }

     breakPoint.addEventListener("change", remover);
     remover(breakPoint)

     
 }