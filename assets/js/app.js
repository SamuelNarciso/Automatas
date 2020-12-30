//Guardado los obejetos de html en una variable  de JS para poder manipularla
const btn_verificar = document.querySelector('#verificar');
const entrada_cadena_curp = document.querySelector('#CURP');
const entrada_cadena_EXP_REG = document.querySelector('#EXP_REG');
const contenedor_emoji = document.querySelector('.emoji');
/*Esta es la funcion que verifica si la cadena es correcta
Recibe dos parametros los cuales son el curp o cadena 
y la expresion regular a analizar
*/
const verficar_curp = (curp, expresion) => {
	let exp_reg = new RegExp(expresion);

	return exp_reg.test(curp);
};
/*En esta parte se esta escuchando el evento del boton para poder analizar la
cadena*/
btn_verificar.addEventListener('click', () => {
	let cadena = entrada_cadena_curp.value; //asignando el valor de la cadena a una variable
  /*Evaluando si en el campo de la expresion regular hay algun valor en caso de
    * no averlo poner la expresion regular del CURP*/
	let expresion = entrada_cadena_EXP_REG.value
		? entrada_cadena_EXP_REG.value
		: '^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$';
	expresion = expresion.toUpperCase(); //Pasando la expresion  a analizar en mayusculas

	const ultima_pos = expresion.length - 1;

	console.log(cadena[0]);
	console.log(cadena[ultima_pos]);
  //Verificando que la exprexion regular tenga los simbolos inicaciales
  //y terminales en caso de no tenerlos el programa los suma a la cadana
	expresion = !expresion.includes('^') ? '^' + expresion : expresion;
	expresion = !expresion.includes('$') ? expresion + '$' : expresion;
  //verificando que la cadena no sea nula
	if (cadena) {
		cadena = cadena.toUpperCase(); //pasando la cadena a mayusculas 

		contenedor_emoji.classList.remove('like');
		contenedor_emoji.classList.remove('dislike');

		if (verficar_curp(cadena, expresion)) {
			contenedor_emoji.classList.add('like');
		} else {
			contenedor_emoji.classList.add('dislike');
		}
	} else {
		contenedor_emoji.classList.remove('like');
		contenedor_emoji.classList.remove('dislike');
	}

	console.log('cadena: '+cadena);
	console.log('expresion: '+expresion);
});
