//Seleccionar los elementos HTML con los que queremos trabajar
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputValues);

//Escuchar los eventos
function sumarInputValues(event) {
    event.preventDefault(); //Para que no ejecute lo que por defecto ejecuta(recargarse)
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = `El resultado es: ${sumaInputs}`;
}
 
//Otra opción es button type="button" y el addEventListener ('click', funcion).