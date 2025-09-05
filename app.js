// let titulo = document.querySelector("h1");
// titulo.innerHTML= "Juego del numero secreto ";

// let parrafo=document.querySelector("p");
// parrafo.innerHTML="Escoje un numero del 1 al 10";


let intentos =1;
let numeroAleatorioSecreto = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;
// este console.log simplemente es para probar que la variable creada con la funcion si esta funcionando

// con esta funcion hemos creado una variable aleatoria 
function CrearNumeroAleatorioSecreto() {
  // la opcion return es la que retorna la variable
  // antes estaba de esta manera ojo  let numeroAleatorioSecreto = Math.floor(Math.random()*10)+1;  return numeroAleatorioSecreto
let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;  
if (listaNumerosSorteados.length == numeroMaximo){
cambiarTextoElemento("p","has adivinado todos los numeros posibles en el juego, Felicitaciones!")
// si este numero esta en la lista hacemos una operacion 
} else {
      if(listaNumerosSorteados.includes(numeroGenerado)){
         return CrearNumeroAleatorioSecreto();
  }else{
        listaNumerosSorteados.push(numeroGenerado);
         return numeroGenerado;
  }
}
};

console.log(numeroAleatorioSecreto);  // este es el primer numero que se muestra en la consola pq el sistema lo hace automaticamente
console.log(typeof(numeroAleatorioSecreto));
console.log(listaNumerosSorteados);



function verificarIntentoDeUsuario(){
  let numeroIngresadoDeUsuario = parseInt(document.getElementById("numeroDeUsuario").value); // aqui tomamos el valor del imput y lo convertimos en numero con el parseInt pq estaba como string
  // todos los console.log se utilizan para ir probando el codigo no es necesario dejarlo en el programa por eso los comento
  // console.log(numeroIngresadoDeUsuario)  mostramos numero en consola
  // console.log(typeof(numeroIngresadoDeUsuario));  verificamos que sea tipo number
  // console.log(numeroAleatorioSecreto === numeroIngresadoDeUsuario)  y aqui se verifica que ambos sean number y el mismo numero
  
  if ((numeroAleatorioSecreto === numeroIngresadoDeUsuario)){
    cambiarTextoElemento("p",`Has acertado el numero secreto en ${intentos} ${intentos==1 ? 'vez' : 'veces'}`)
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if(numeroAleatorioSecreto>numeroIngresadoDeUsuario){
cambiarTextoElemento("p","El numero secreto es mayor")
  }else{
    cambiarTextoElemento("p","El numero secreto es menor")
  }
  intentos++;
  limpiarCajaInput();
  
  return;

};


// ahora se va crear una funcion para optimizar codigo y podamos cambiar el texto de "h1" y "p" en una sola linea
// llamese etiqueta el elemento a modificar{h1,p,etc} y texto lo que va aparecer en la pantalla
function cambiarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}

// entonces cada vez que llamemos la funcion escojemos primero la etiqueta a modificar y luego agregamos su texto
// importante la sintaxis que hay qye tener en cuenta de los parentesis, las comillas y las comas
// despues de esto se pueden comentar la forma como se declararon las variables titulo y parrafo y no pasa nada malo



function condicionesIniciales(){
  
  cambiarTextoElemento("h1",'Juego del numero secreto!');
cambiarTextoElemento("p",`Escoje un numero del 1 al ${numeroMaximo}`);
numeroAleatorioSecreto = CrearNumeroAleatorioSecreto();
intentos=1;
console.log(numeroAleatorioSecreto);
}




function limpiarCajaInput() {
  // tenemos dos maneras de limpiar el input esta es una comentada y la otra normal
//  let valorCaja= document.querySelector("#numeroDeUsuario")
//  valorCaja.value="";
 document.querySelector("#numeroDeUsuario").value="";

}

function reiniciarJuego() {
  //limpiar caja de input
  limpiarCajaInput();
  // indicar mensaje de intervalo de numeros "p"
  // generar el numero aleatorio
  
   //inicializar el numero de intentos
   condicionesIniciales();
  //deshabilitar el boton de juego
  document.getElementById("reiniciar").setAttribute("disabled","true");
 
}

condicionesIniciales();