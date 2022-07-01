const d = document;
export default function draw(btn, selector){
    
    const getWinner = (selec) =>{
        const $players = d.querySelectorAll(selec);
        const random = Math.floor(Math.random()*$players.length),
         winner = $players[random];
         return `El ganador es ${winner.textContent}`;

    }

    d.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            console.log(result);
            alert(result);
        }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*d.addEventListener("click", (e)=>{
        if(e.target.matches(btn)){
            let num = Math.round(Math.random()*10);
            let lenguaje = d.getElementById(`${num}`)
            console.log(`El ganador es: ${lenguaje.innerHTML}`);
            alert(`El ganador es: ${lenguaje.innerHTML}`)
            console.log(`${num}`)
            
            
        }
    })*/
}