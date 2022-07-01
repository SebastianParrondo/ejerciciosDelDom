const d = document;
export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-scroll-video]")
    

    const cb = (entries) => {
        entries.forEach((entrie) =>{
            if(entrie.isIntersecting){
                entrie.target.play();
            }else{
                entrie.target.pause();
            }
            d.addEventListener("visibilitychange", e=>{
                (d.visibilityState === "visible")
                ? entrie.target.play() 
                : entrie.target.pause()
            })
        })

    }    
    const observer = new IntersectionObserver(cb, {
        threshold: [0.5]
    })
    $videos.forEach(el=>{
        observer.observe(el);
    })
}