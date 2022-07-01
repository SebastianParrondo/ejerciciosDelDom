const d = document;
export default function getGeoLocation(id){
    const $id = d.getElementById(id),
     options = {
         enableHighAccuracy: true,
         timeout: 5000,
         maximunAge: 0
     };
    const succces = (position) =>{
        console.log(position);
        $id.innerHTML = `
        <p>Mi Ubicación</p>
        <ul>
            <li>Latitud: <b>${position.coords.latitude}</b></li>
            <li>Longitud: <b>${position.coords.longitude}</b></li>
            <li>Precisión: <b>${position.coords.accuracy}</b></li>
        </ul>
        <a href="https://google.com.ar/maps/@${position.coords.latitude}, ${position.coords.longitude}, 20z" target="_blank" rel="noopener">
        Ver mi ubicacion en el mapa
        </a>`
    }
    const error = (err) =>{
        console.log(err)
        $id.innerHTML = `Error N° ${err.code}: <mark>${err.message}</mark>`
        
    }
    
     navigator.geolocation.getCurrentPosition(succces, error, options)

}