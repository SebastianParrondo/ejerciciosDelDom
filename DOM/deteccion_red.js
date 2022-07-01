const d = document;
export default function networkStatus(){
    const isOnLine = () =>{
        const $div = d.createElement("div");
        if(navigator.onLine){
           $div.textContent = "Conexión Reestablecida";
           $div.classList.remove("OffLine");
           $div.classList.add("onLine");
           
        }else{
            $div.textContent = "Conexión Interrumpida"
            $div.classList.remove("onLine")
            $div.classList.add("offLine")
        }
        d.body.insertAdjacentElement("afterbegin", $div)
        setTimeout(() => {
            d.body.removeChild($div)
        }, 2000);
    }

    window.addEventListener("online", (e)=>{
        isOnLine();
    })
    window.addEventListener("offline", (e)=>{
        isOnLine();
    })

}