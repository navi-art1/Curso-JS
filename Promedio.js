const lista1 = [
    100,200,300,500,
];

function calcularMediaAritmetica(lista){
    //let suma =0;
    //for (var i = 0; i<lista.length;i++){
    //    suma = suma + lista[i]
    //}

    const suma = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    )
    
    const promedioLista = suma/lista.length;
    return promedioLista;
}
