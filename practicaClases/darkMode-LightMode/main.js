const boton = document.getElementById("butonUwU")
const modo = document.getElementById("modo")

boton.addEventListener("click", ()=>{
    if (modo.className == "ModoDark"){
        modo.className = "ModoLight"
        boton.innerText = "Cambiar a modo oscuro"
    }else{
        modo.className = "ModoDark"
        boton.innerText = "Cambiar a modo claro"
    }
})