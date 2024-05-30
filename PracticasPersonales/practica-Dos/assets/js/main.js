const btn = document.getElementById("botonDecoraciones")
const OnOff = document.getElementById("BotonPartes")

btn.addEventListener("click", ()=>{
    if(OnOff.className == "liks-de-partes" ){
        OnOff.className = "liks-de-partesPRENDIDIO"
    }else{
        OnOff.className = "liks-de-partes"
    }
})