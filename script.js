// Función utilizando un Array
let listaComprasArr = [];

const agregarProductoArr = (productoAgregado) => {
    // Variable con valor del producto agregado, para hacer validación
    const prodAgregVal = productoAgregado.toUpperCase();
    // Variable con valor booleano para validación de que exista o no exista el producto
    let productoExiste = false;
    // Ciclo for para validar si el producto ya se encuentra en la lista. Si ya existe, productoExiste se hace true
    for (let i = 0; i < listaComprasArr.length; i++) {
        if (prodAgregVal === listaComprasArr[i]) {
            productoExiste = true;
            console.log(`El producto "${listaComprasArr[i]}" ya se encuentra en la lista`);
            return;
        }
    }
    // Si producto no existe, se agrega
    if (!productoExiste) {
        listaComprasArr.push(prodAgregVal);
    }
};

const eliminarProductoArr = (productoEliminado) => {
    // Variable con valor del producto eliminado, para hacer validación
    const prodElimVal = productoEliminado.toUpperCase();
    // Arreglo filtrado
    listaComprasArr = listaComprasArr.filter((productoEliminado) => productoEliminado !== prodElimVal);
};

const mostrarListaArr = () => {
    console.log('Lista de compras (Array):');
    console.log(listaComprasArr);
}

agregarProductoArr('Zapatos');
agregarProductoArr('Tenis');
agregarProductoArr('zapatos');
eliminarProductoArr('Tenis');
agregarProductoArr('tenis');
agregarProductoArr('tenIs');
agregarProductoArr('gorra');
agregarProductoArr('playera');
agregarProductoArr('PLAYERA');
eliminarProductoArr('sueter');
agregarProductoArr('sueter');
agregarProductoArr('gorra');
eliminarProductoArr('sueter');
mostrarListaArr();

// Función utilizando un Set
let listaComprasSet = new Set();

const agregarProductoSet = (productoAgregado) => {
    listaComprasSet.add(productoAgregado.toUpperCase());
}

const eliminarProductoSet = (productoEliminado) => {
    listaComprasSet.delete(productoEliminado.toUpperCase());
}

const mostrarListaSet = () => {
    console.log('Lista de Compras(Set):');
    console.log(listaComprasSet);
}

agregarProductoSet('Zapatos');
agregarProductoSet('Tenis');
agregarProductoSet('zapatos');
eliminarProductoSet('Tenis');
agregarProductoSet('tenis');
agregarProductoSet('tenIs');
agregarProductoSet('gorra');
agregarProductoSet('playera');
agregarProductoSet('PLAYERA');
eliminarProductoSet('sueter');
agregarProductoSet('sueter');
agregarProductoSet('gorra');
eliminarProductoSet('sueter');
mostrarListaSet();