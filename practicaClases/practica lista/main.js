let listaDeTarea = [{
    nombreDeLaTarea: "tomar agua",
    estaCompleta: false
},
{
    nombreDeLaTarea:"pepino",
    estaCompleta:true
}
]

const elListaTareas = document.getElementById("listaTarea")

function elListaTareas(nombre, completa){
    elListaTareas.innerHTML += `
    <div class="tareas">
    <input type="checkbox">
    <p>${nombre
        
    }</p>
    
    
    `
}
