// Creamos la clases de nodos
class Node {
    constructor(valor){
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

// definimos el arbol
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // funcion de árbol para el valor
    insert(valor){
        const newNode = new Node(valor);

        if (this.root === null){
            this.root = newNode;
        }else {
            let currentNode = this.root;

            while(true){
                if(valor < currentNode.valor){
                    if(currentNode.izquierda === null){
                        currentNode.izquierda = newNode;
                        return true;
                    }
                    currentNode = currentNode.izquierda;
                }else{
                    if(currentNode.derecha === null){
                        currentNode.derecha = newNode;
                        return true;
                    }
                    currentNode = currentNode.derecha;
                }
            }
        }
    }

    buscar(valor) {
        let currentNode = this.root;
        const coincidencias = [];

        while (currentNode !== null) {
            if (valor === currentNode.valor) {
                coincidencias.push(currentNode.valor);
            }

            if (valor <= currentNode.valor) {
                currentNode = currentNode.izquierda;
            } else {
                currentNode = currentNode.derecha;
            }
        }

        return coincidencias;
    }
}
const tree = new BinaryTree();
tree.insert(3);
tree.insert(1);
tree.insert(2);
tree.insert(4);
tree.insert(5);
tree.insert(6);

console.log(tree.buscar(3)); // Salida: [3]
console.log(tree.buscar(4)); // Salida: [4]
console.log(tree.buscar(7)); // Salida: []
console.log(tree.buscar(8)); // Salida: []




// Tarea para 06/10/23
// completar el buscar que regrese un arreglo, con todas las coincidencias.