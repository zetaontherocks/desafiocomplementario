let precio;
let iva;

function ingresePrecio() {
	precio = prompt('Ingrese monto');
	return precio;
}

function calculaIva() {
	iva = (precio * 21) / 100;
	alert(iva);
	return iva;
}

function mostrarFinal() {
	alert('El precio es ' + precio + iva);
}

ingresePrecio();

calculaIva();

mostrarFinal();
