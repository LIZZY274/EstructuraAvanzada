var lista = [];
for(let i=0; i<=10; i++){
    lista.push(i);
    lista.unshift(i);
}

var lista2 = [];
for(let i=0; i<=10; i++){
    lista2.unshift(i);
}

console.log(lista)
console.log(lista2)

var arreglo = [1,2,3,4,5,6,7,8,9];

for(let i=0; i<arreglo.length; i++){
    arreglo.shift(i);
}

console.log(arreglo);