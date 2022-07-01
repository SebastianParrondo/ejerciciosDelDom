const d = document;

export default function darkTheme(btn, darkClass, area, ball){
    const $themeBtn = d.querySelector(btn),
      $selectors = d.querySelectorAll("[data-dark]"),
      $area = d.querySelector(area),
      $ball = d.querySelector(ball);

    let moon = "🌒",
     sun = "☀️";

     const modeDark = () =>{
        $selectors.forEach((el)=>el.classList.add(darkClass))
        $themeBtn.textContent = sun;
        $area.classList.add("is-area-dark");
        $ball.classList.add("is-ball-dark");
        localStorage.setItem("theme", "dark");
     }
     const modeLight = () =>{
        $selectors.forEach((el)=>el.classList.remove(darkClass))
        $themeBtn.textContent = moon;
        $area.classList.remove("is-area-dark");
        $ball.classList.remove("is-ball-dark");
        localStorage.setItem("theme", "light");
     }

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            if($themeBtn.textContent === moon){
                modeDark();
            }else{
                modeLight();
            }
        }
    })

    d.addEventListener("DOMContentLoaded", (e)=>{
        if(localStorage.getItem("theme" === null)){
            localStorage.setItem("theme","light");
        }

        if(localStorage.getItem("theme") === "light"){
            modeLight();
        }
         if(localStorage.getItem("theme") === "dark"){
             modeDark();
         }

    })

    
}