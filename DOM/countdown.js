const d = document
export default function countdown(id,limitDate,finalMessage){
    const $countdown = d.getElementById(id),
    dateCountdown = new Date(limitDate).getTime();
    if(dateCountdown < new Date().getTime()) alert("Fecha invalida");
    
    

    let countdown = setInterval(() => {
        const now = new Date().getTime(),
        limitDate = dateCountdown - now,
        day = Math.floor(limitDate / (1000 * 60 * 60 * 24)),
        hour = ("0" + Math.floor(limitDate % (1000 * 60 * 60 * 24)/(1000* 60* 60))).slice(-2),
        minutes = ("0" + Math.floor(limitDate % (1000 * 60 * 60)/(1000* 60))).slice(-2),
        seconds = ("0" + Math.floor(limitDate % (1000 * 60)/(1000))).slice(-2);
        
        $countdown.innerHTML = `<h3> Faltan ${day} dias ${hour} horas ${minutes} minutos ${seconds} segundos</h3>`;
        if(limitDate < 0){
            clearInterval(countdown)
            $countdown.innerHTML = finalMessage;
        }
    }, 1000);


}