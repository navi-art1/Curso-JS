// codigo de cuadrado

console.group("Cuadrado")

function perimetroCuadrado(lado) {
    return 4*lado;
}
function areaCuadrado(lado) {
    return lado*lado;
} 

console.groupEnd();


// codigo de Triangulo

console.group("Triangulo")

function perimetroTriangulo(lado1,lado2,lado3) { 
    return (lado1+lado2+lado3);
}
function areaTriangulo(base,altura){
    return base*altura /2 ;
}

console.groupEnd();

// codigo de Circulo
console.group("Circulo")

const pi = Math.PI;

function perimetroCirculo(radio){
    return 2*radio*pi;
}

function areaCirculo(radio) {
    return pi*radio*radio ;
}

console.groupEnd();

// Aqui interactuamos con el html

function CalcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value = input.value;

    const Area = areaCuadrado(value);
    alert(Area);
}        

function CalcularAreaTriangulo(){
    
    const inputBase = document.getElementById("InputBase");
    const base = inputBase.value;
    
    const InputAltura = document.getElementById("InputAltura");
    const altura = InputAltura.value;
    
    const Area = areaTriangulo(base,altura);
    alert(Area)
}

function CalcularPerimetroTriangulo(){

    const inputLado1 = document.getElementById("InputLado1");
    const lado1 = parseInt(inputLado1.value);

    const inputLado2 = document.getElementById("InputLado2");
    const lado2 = parseInt(inputLado2.value);

    const inputLado3 = document.getElementById("InputLado3");
    const lado3 = parseInt(inputLado3.value);

    
    const perimetro = perimetroTriangulo(lado1,lado2,lado3);
    alert(perimetro)
}

function CalcularPerimetroCirculo(){

    const InputRadio = document.getElementById("InputRadio");
    const Radio = parseInt(InputRadio.value);

    const Area = perimetroCirculo(Radio);
    alert(Area)
}

function CalcularAreaCirculo(){

    const InputRadio = document.getElementById("InputRadio");
    const Radio = parseInt(InputRadio.value);

    const Area = areaCirculo(Radio);
    alert(Area)
}