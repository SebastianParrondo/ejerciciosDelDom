const d = document;

export default function slider(sound){
    const $nextBtn = d.querySelector(".slider-btns .next"),
     $prevBtn = d.querySelector(".slider-btns .prev"),
     $play = d.querySelector("#play"),
     $slide = d.querySelectorAll(".slider-slide");
    const $audio = d.createElement("audio");
    $audio.src = sound;
    d.addEventListener("click",e=>{
        if(e.target === $play){
            $audio.play();
        }

    })
    
     

     let i = 0;
     let slideAuto = setInterval(() => {
        
        $slide[i].classList.remove("active");
        
        i++;
        if(i > ($slide.length -1)){
            i = 0;
        }
        $slide[i].classList.add("active")
         
     }, 3000);
     
     d.addEventListener("click", e=>{
         if(e.target === $prevBtn){
             clearInterval(slideAuto)
             $audio.pause()
             e.preventDefault();
             $slide[i].classList.remove("active");
             i--;

             if(i < 0){
                 i = $slide.length -1;
             }
             $slide[i].classList.add("active")
             
         }
     })
     d.addEventListener("click", e=>{
         if(e.target === $nextBtn){
            clearInterval(slideAuto)
            $audio.pause()
             e.preventDefault();
             $slide[i].classList.remove("active");

             i++;
             if(i > ($slide.length -1)){
                 i = 0;
             }
             $slide[i].classList.add("active")

         }

         
     })
}