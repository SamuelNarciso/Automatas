const btn_verificar = document.querySelector('#verificar');
const entrada_cadena = document.querySelector('#entrada_cadena');
const contenedor_emoji = document.querySelector('.emoji');

const verficar_curp = (curp) => {
	let exp_reg = new RegExp(
		'[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}'
	);
	return exp_reg.test(curp);
};

btn_verificar.addEventListener('click', () => {
	if (entrada_cadena.value) {
		contenedor_emoji.classList.remove('like');
		contenedor_emoji.classList.remove('dislike');

		if (verficar_curp(entrada_cadena.value)) {
			contenedor_emoji.classList.add('like');
		} else {
			contenedor_emoji.classList.add('dislike');
		}
	} else {
		contenedor_emoji.classList.remove('like');
		contenedor_emoji.classList.remove('dislike');
	}
});

entrada_cadena.addEventListener('keypress', (e) => {
    let texto = entrada_cadena.value;
      entrada_cadena.value = texto.toUpperCase();
});
