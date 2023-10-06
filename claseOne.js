function imprimir(){
    const arreglo2= [];
    let leyenda = ""
    for(let i=1; i<100; i++){
        arreglo2[i]=i;
        if(arreglo2[i]%3===0){
            console.log("Soy un multiplo de 3")
        }else if(arreglo2[i]%7===0){
            console.log("soy multiplo de 7")
        }else{
            console.log(arreglo2[i])
        }
    }
}

imprimir();