function capitalizarNombre(nombre,apellido, cb){
    let nombreCapitalizado = nombre[0].toUpperCase() + nombre.slice (1,nombre.length);

    let apellidoCapitalizado = apellido[0].toUpperCase() + apellido.slice(1,apellido.length);

    cb(nombreCapitalizado, apellidoCapitalizado)
}


function enviarMensaje(persona, apellidoPersona){
    console.log("hola", persona, apellidoPersona)
}


capitalizarNombre("pedro","sanabria", enviarMensaje)


// let a = [10,12,15,20,23,44,105];
// let i
// let b = []


// for ( i = 0 ; i < a.length; i++ ){
//     if(a[i] % 2 == 0){
//     b.push(a[i])
//     }else{
    
//     }
// }

// console.log(b)



/* este es para multiplicar los elemoentos de l array*/

// let a = [10,12,15,20,23,44,105];
// let b = [];
// let c;

// for (let i = 0 ; i < a.length ; i++){
//     c = a[i] * 2;
//     b.push(c);
// }

// console.log(b);




/*esto es lo divisilble por 2 en una solo array */

// let a = [10,12,15,20,23,44,105];

// for (let i = 0 ; i < a.length ; i++ ){
//     if (!(a[i]%2 == 0)){
//         a.splice(i,1)
//     }else{

//     }
// }

// console.log(a)


