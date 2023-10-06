function imprimirArreglo() {
    let arreglo = [];
    for (let i = 1; i <= 100; i++) {
    
        if (i % 3 === 0 || i % 7 === 0) {
            arreglo.push(i + " soy múltiplo de 3 o 7");
        }
    }

    arreglo.forEach(numero => {
        console.log(numero);
    });
}

imprimirArreglo();
