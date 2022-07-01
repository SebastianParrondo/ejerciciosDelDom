const d = document;

export default function serchFilters(input, selector){
     d.addEventListener("keyup", (e)=>{
         if(e.target.matches(input)){
             //console.log(e.key) //imprime la tecla presionada
             //console.log(e.target.value) imprime el el contenido completo del search
             let textSearch = e.target.value.toLowerCase();
            if(e.key === "Escape") textSearch = "";
            d.querySelectorAll(selector).forEach(el=>{
                el.textContent.toLowerCase().includes(textSearch)
                ? el.classList.remove("filter")
                : el.classList.add("filter")
            })
         }
         //console.log(`El valor de search es: ${e.target.value}`)
     })
}