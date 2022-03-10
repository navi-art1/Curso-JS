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


function comparar(lado1,lado2,lado3){
    if (lado1 == lado2 && lado1 != lado3){
        var lados = [lado1, lado3];
    }else if (lado1 == lado3 && lado1 != lado2){
        var lados = [lado1, lado2];
    }else if (lado2 == lado3 && lado2 != lado1){
        var lados = [lado2,lado1];
    }else if (lado1 == lado2 && lado1 ==lado3){
        var lados = [lado1,lado1];
    }
    return lados
}

function alturaTriangulo(lado1,lado2){
    
    if(lado1>lado2/2){
        return Math.sqrt(lado1*lado1-lado2*lado2/4) 
    }else if(lado2>lado1/2){
        return Math.sqrt(lado2*lado2-lado1*lado1/4) 
    } 
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

function CalcularAlturaTriangulo(){

    const inputLado1 = document.getElementById("InputLado1");
    const lado1 = parseInt(inputLado1.value);

    const inputLado2 = document.getElementById("InputLado2");
    const lado2 = parseInt(inputLado2.value);

    const inputLado3 = document.getElementById("InputLado3");
    const lado3 = parseInt(inputLado3.value);

    const Lados = comparar(lado1,lado2,lado3);
    const altura = alturaTriangulo(Lados[0],Lados[1])

    alert(altura);
}