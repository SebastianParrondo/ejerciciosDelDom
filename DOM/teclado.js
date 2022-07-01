
const d = document;
let x = 0, y = 0;

export function moveBall(e,ball,area){    
    const $ball = d.querySelector(ball),
    $area = d.querySelector(area);  

    const limitsBall = $ball.getBoundingClientRect();
    const limitsarea = $area.getBoundingClientRect();

    switch (e.keyCode) {
        case 37:
            if(limitsBall.left >= limitsarea.left) {
                e.preventDefault();
                x--
            }
            break;
        case 38:
            if(limitsBall.top >= limitsarea.top) {
                e.preventDefault();
                y--   // en la web para aumentar en el eje y los valores deben ser menos que 0
            }
        
            break;
        case 39:
            if(limitsBall.right <= limitsarea.right){
                e.preventDefault();
                x++  
            } 
            break;
        case 40:
            if(limitsBall.bottom <= limitsarea.bottom){
                e.preventDefault();
                y++  
            } 
            break;
        default:
            break;
    }    
    $ball.style.transform = `translate(${x * 10}px, ${y *10}px)`
    

    
}
