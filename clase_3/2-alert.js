//recibe 1 string
//alert('hola, buenos días');

//confirm, recibe 1 string
// var confirmacion = confirm('seguro que desea continuar?');
// console.log(confirmacion);

//prompt, recibe 1 o 2 strings
var ingresado;
do
	ingresado = prompt('ingrese un número', '5');
while(isNaN(parseInt(ingresado)));
console.log(ingresado);