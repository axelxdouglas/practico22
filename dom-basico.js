const h1 = document.querySelector('h1');
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})


//MANIPULACIÓN DEL DOM (QUE EN REALIDAD SE REALIZA CUANDO LOS USUARIOS HACEN ALGO. CAMBIAR ALGO DEL HTML CON JS)

//Cambiar lo que ya está
h1.innerHTML = 'Patito <br>El pajarito'
//.innerText que convierte a texto no más

//Dar una clase al elemento HTML
h1.getAttribute('class') //Ayuda a leer algunos atributos o clase que tenga nuestro elemento
h1.setAttribute('class', 'rojo') //Para modificar esa clase
h1.classList.add('rojo')//Funciona específicamente con las clases. Le agrega la clase.
h1.classList.remove('verde'); //Para eliminar

//h1.classList.contains('verde');Es como una condicional true/false que devuelve dependiendo la clase que usemos

//Modificar value por defecto del input
input.value = "456"

//Crear desde cero
const img = document.createElement('img') //crear una img 
//Para que exista, agarrar un elemento existente y meter la etiqueta dentro
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif') //Le ponemos los atributos (src) junto con su valor (url)
//Hay que meter la img en alguna parte (dentro del párrafo con el id "pid")
pid.append(img);//Con append no borra el contenido de nuestro párrafo sino que pone la img después

//pid.innerHTML= ""; borraría no el párrafo, pero sí lo que hay dentro

//DOM CUANDO HACEN ALGO. USANDO LOS EVENTOS CON JS