const btn_verificar = document.querySelector('#verificar');
const entrada_cadena_curp = document.querySelector('#CURP');
const entrada_cadena_EXP_REG = document.querySelector('#EXP_REG');
const contenedor_emoji = document.querySelector('.emoji');

const verficar_curp = (curp, expresion) => {
	let exp_reg = new RegExp(expresion);

	return exp_reg.test(curp);
};

btn_verificar.addEventListener('click', () => {
	let cadena = entrada_cadena_curp.value;

	let expresion = entrada_cadena_EXP_REG.value
		? entrada_cadena_EXP_REG.value
		: '^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$';
	expresion = expresion.toUpperCase();

	const ultima_pos = expresion.length - 1;

	console.log(cadena[0]);
	console.log(cadena[ultima_pos]);

	expresion = !expresion.includes('^') ? '^' + expresion : expresion;
	expresion = !expresion.includes('$') ? expresion + '$' : expresion;

	if (cadena) {
		cadena = cadena.toUpperCase();

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
