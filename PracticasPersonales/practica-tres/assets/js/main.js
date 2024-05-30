const btn=document.getElementById("botonPartesInfo")
const modo = document.getElementById("partesInfoIzquierda")

btn.addEventListener("click", ()=>{
    if (modo.className == "liks-de-partesApagado"){
        modo.className = "liks-de-partesPrendido"
    }else{
        modo.className = "liks-de-partesApagado"
    }
})