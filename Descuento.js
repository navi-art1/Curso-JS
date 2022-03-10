const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = precioOriginal* porcentajePrecioConDescuento/100;

function calcularPrecioConDescuento(precio, descuento){

    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = precio * porcentajePrecioConDescuento/100;
    
    return precioConDescuento;

}

function CalcularPrecioConDescuentoConCupon(precio,descuento,cupon){

    const porcentajePrecioConDescuentoConCupon = 100 - descuento - cupon;

    const precioConDescuentoCupon = precio * porcentajePrecioConDescuentoConCupon /100;

    return precioConDescuentoCupon;
}

function CalcularPrecioDescuento() {
    const Precio = document.getElementById("InputPrecio");
    const Pre = parseInt(Precio.value);

    const Descuento = document.getElementById("InputDescuento");
    const Des = parseInt(Descuento.value);

    const Calcular = calcularPrecioConDescuento(Pre, Des);

    const Resultado = document.getElementById("Resultado");
    Resultado.innerText = "El precio con descuento es: $" + Calcular

}

function CalcularPrecioCupon(){
    const Cupon = document.getElementById("InputCupon");
    const Cup = parseInt(Cupon.value);

    const Precio = document.getElementById("InputPrecio");
    const Pre = parseInt(Precio.value);

    const Descuento = document.getElementById("InputDescuento");
    const Des = parseInt(Descuento.value);

    const Calcular = CalcularPrecioConDescuentoConCupon(Pre,Des,Cup)

    const Cupo = document.getElementById("ResultadoCupon")
    Cupo.innerText = "El precio con descuento y cupon es : $" + Calcular 
}