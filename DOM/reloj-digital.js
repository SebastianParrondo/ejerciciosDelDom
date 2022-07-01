const d = document;
export function relojDigital(btnIniciar, btnDetener, reloj){
    
    let setTiempo;
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnIniciar)){
            setTiempo = setInterval(()=>{
                let hour = new Date().toLocaleTimeString();
                d.querySelector(reloj).innerHTML = `<h3>${hour}</h3>`;
            },1000);
            e.target.disabled = true;
        }

        if(e.target.matches(btnDetener)){
            clearInterval(setTiempo)
            d.querySelector(reloj).innerHTML = null;
            d.querySelector(btnIniciar).disabled = false;
        }
    })    
}

export function alarma(sound, btnIniciar, btnDetener){
    let alarmaTiempo;
    const $audio = d.createElement("audio");
    $audio.src = sound;

    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnIniciar)){
            alarmaTiempo = setTimeout(()=>{
                $audio.play();
            },2000)
            e.target.disabled = true;
        }
    
        if(e.target.matches(btnDetener)){
            clearTimeout(alarmaTiempo);
            $audio.pause();
            $audio.currentTime = 1;
            d.querySelector(btnIniciar).disabled = false;
        }
        
    })
    
}

