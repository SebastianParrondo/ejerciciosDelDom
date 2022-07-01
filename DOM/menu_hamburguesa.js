export default function hamburguerMenu(btnPanel, panel, linkPanel){

    const d = document;

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnPanel) || e.target.matches(`${btnPanel} *`)){
            d.querySelector(panel).classList.toggle("esta-activo");
            d.querySelector(btnPanel).classList.toggle("is-active")
        }
        if(e.target.matches(linkPanel)){
            d.querySelector(panel).classList.remove("esta-activo")
            d.querySelector(btnPanel).classList.remove("is-active")
        }
    })
}