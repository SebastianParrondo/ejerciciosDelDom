const d = document;
export default function userDeviceInfo(id){
    const $id = d.getElementById(id),
     isMobile = {
        android: () => navigator.userAgent.match(/android/i),
        ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
        windows: () => navigator.userAgent.match(/windows phone/i),
        any: function(){
            return this.android() || this.ios() || this.windows();
        },
     },
     isDesktop = {
        windows: () => navigator.userAgent.match(/windows nt/i), 
        mac: () => navigator.userAgent.match(/mac os/),
        linux: () => navigator.userAgent.match(/linux/i),
        any: function(){
            return this.windows() || this.linux() || this.mac();
        },
     },
     isBrowser = {
        chrome: ()=> navigator.userAgent.match(/chrome/i),
        safari: ()=> navigator.userAgent.match(/safari/i),
        firefox: ()=> navigator.userAgent.match(/firefox/i),
        opera: ()=> navigator.userAgent.match(/opera|opera mini/i),
        ie: ()=> navigator.userAgent.match(/msie|iemobile/i),
        edge: ()=> navigator.userAgent.match(/edge/i),
        any: function(){
            return (this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge());
        }
     }

     $id.innerHTML = `
     <ul>
        <li>User Agent: <b>${navigator.userAgent}</b></li>
        <li>Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
     </ul>`;
     /* validaciones */
     if(isBrowser.chrome()) $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
     if(isBrowser.edge()) $id.innerHTML += `<p><mark>Este contenido solo se ve en Edge</mark></p>`;
     if(isMobile.android()) $id.innerHTML += `<p><mark>Este contenido solo se ve en Android</mark></p>`;
     if(isMobile.ios()) $id.innerHTML += `<p><mark>Este contenido solo se ve en un dispositivo Apple</mark></p>`;

     /* Redirecciones */

     if(isMobile.android()){
        window.location.href = "https://www.cariverplate.com.ar/"
      } 
     
}