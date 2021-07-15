var precio;
var iva;

function ingresePrecio() {
	precio = parseInt(prompt('Ingrese monto'));
}

function calculaIva() {
	iva = (precio * 21) / 100;
	alert(iva);
}

function mostrarFinal() {
	precio = precio + iva;
	alert('El precio es ' + precio);
}

ingresePrecio();

calculaIva();

mostrarFinal();
