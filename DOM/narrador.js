const d = document;

export default function speechReader(){

    const $speechSelect = d.getElementById("speech-select"),
     $speechTextArea = d.getElementById("speech-text"),
     $speechButton = d.getElementById("speech-btn"),
     speechMessage = new SpeechSynthesisUtterance();

     //console.log(speechMessage)

     let voices = [];

     d.addEventListener("DOMContentLoaded", (e)=>{
         window.speechSynthesis.addEventListener("voiceschanged", (e)=>{
             voices = window.speechSynthesis.getVoices();

             voices.forEach(voice =>{
                 const $option = d.createElement("option");
                 $option.value = voice.name;
                 $option.textContent = `${voice.name} -- ${voice.lang}`;

                 $speechSelect.appendChild($option);
                 
             })
                
         })
     })
     
     
     d.addEventListener("change", (e)=>{
         if(e.target === $speechSelect){
             speechMessage.voice = voices.find(voice => voice.name === e.target.value)
             console.log(speechMessage)
         }

     })

     d.addEventListener("click", (e)=>{
         if(e.target === $speechButton){
             speechMessage.text = $speechTextArea.value;
             window.speechSynthesis.speak(speechMessage);

         }

     })

}