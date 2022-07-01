const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");

    const cb = (entries) =>{
        console.log(entries[12])
        
       entries.forEach((entry)=>{
            //console.log(entry)
            const id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        })
        

    }

    
    
    const observer = new IntersectionObserver(cb,{
        //root //apunta al documento
        //rootMargin: "-250px",
        threshold: [0.5]
    });

    $sections.forEach(el=>observer.observe(el))
}