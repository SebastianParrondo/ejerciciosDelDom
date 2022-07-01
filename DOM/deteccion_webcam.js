const d = document;
export default function webCam(id){
    const $video = d.getElementById(id)

    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true, audio:false})
        .then((stream)=>{
            console.log(stream);
            console.log($video)
            $video.srcObject = stream;
            $video.play();
        })
        .catch((err)=>{
            $video.insertAdjacentHTML("beforebegin", `<p>Sucedio un  error!: <mark>${err}</mark></p>`);
            console.log(`Sucedio un  error!: <mark>${err}</mark></p>`)
        })
    }
}