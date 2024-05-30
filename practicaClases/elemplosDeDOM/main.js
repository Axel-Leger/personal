// const modo = document.getElementById("modo")
// const btn = document.getElementById("boton")



// btn.addEventListener("click", ()=>{
//     if(modo.className == "ModoOscuro"){
//         modo.className = "ModoClaro"
//     }else{
//         modo.className = "ModoOscuro"
//     }
// })
// const btnBloque = document.getElementById("botonBloques");
// btnBloque.addEventListener("click", () => {
//     const colorBloques = Array.from(document.querySelectorAll(".bloqueLOL, .bloqueVerde, .bloqueRojo"));
//     for (let i = 0; i < colorBloques.length; i++) {
//         if (colorBloques[i].className == "bloqueLOL") {
//             colorBloques[i].classList.remove("bloqueLOL");
//             colorBloques[i].classList.add("bloqueVerde");
//         }  else if (colorBloques[i].classList.contains("bloqueVerde")){
//             colorBloques[i].classList.remove("bloqueVerde");
//             colorBloques[i].classList.add("bloqueRojo");
//         }else  if (colorBloques[i].classList.contains("bloqueRojo")){
//             colorBloques[i].classList.remove("bloqueRojo");
//             colorBloques[i].classList.add("bloqueLOL");
//         }
        
//     }
// });


// document.getElementById('agregarElemento').addEventListener('click', function() {

//     var nuevoElemento = document.createElement('p');
//     nuevoElemento.textContent = 'Este parrafo fue creado en js';


//     var contenedor = document.getElementById('contenedor');
//     contenedor.appendChild(nuevoElemento);
// });

const boton = document.getElementById("agregarElemento")
const contenedor = document.getElementById("contenedor")
const elementoElim = document.getElementById("elemntoParaEliminar")


boton.addEventListener("click",function(){
    contenedor.removeChild(elementoElim)


})