const d = document,
w = window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener("scroll", e=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if(scrollTop > 300){
            $scrollBtn.classList.remove("estas-activo")
        }else{
            $scrollBtn.classList.add("estas-activo")
        }

    })

    d.addEventListener("click", e=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} * `)){
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            })
        }
    })
    
    
}