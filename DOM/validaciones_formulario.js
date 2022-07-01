const d = document;
export default function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
     $inputs = d.querySelectorAll(".contact-form [required]");

     //console.log($inputs)

     $inputs.forEach(input =>{
         const $span = d.createElement("span");
         $span.id = input.name;
         $span.textContent = input.title
         $span.classList.add("contact-form-error", "none")
         input.insertAdjacentElement("afterend", $span)         
     })

     d.addEventListener("keyup", (e)=>{
        if(e.target.matches(".contact-form [required]")){
            let pattern = e.target.pattern || e.target.dataset.pattern;
            
            if(pattern && e.target.value !== ""){
                let regex = new RegExp(pattern);
                return !regex.exec(e.target.value)
                 ? d.getElementById(e.target.name).classList.add("is-active")
                 : d.getElementById(e.target.name).classList.remove("is-active")
            }

            if(!pattern){
                return (e.target.value === "")
                ? d.getElementById(e.target.name).classList.add("is-active")
                : d.getElementById(e.target.name).classList.remove("is-active")
            }
            
        }
     })
    /* Simulacion de envio de formulario */
     d.addEventListener("submit", (e)=>{
         d.querySelector(".contact-form").submit();
         //e.preventDefault();
         console.log("Enviando Formulario")
         alert("Enviando formulario")

        const $loaded = d.querySelector(".contact-form-loader"),
         $response = d.querySelector(".contact-form-response");
         
         $loaded.classList.remove("none")
        
        setTimeout(() => {
            $loaded.classList.add("none");
            $response.classList.remove("none");
            e.target.reset();

            setTimeout(() => {
                $response.classList.add("none")
            }, 3000);
            
        }, 3000);
    
        })
       
            
       
}