///cosas del DOM
//const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar= document.querySelectorAll(".producto-agregar");
let acumulador= document.querySelector("#acumulador");

let cajonProductos = document.getElementById("contenedor-productos");

fetch ("./data.json")
.then (response => response.json())
.then (data => {
    data.forEach (producto => {
        const div = document.createElement ("div");
        div.innerHTML= ` 
                 <img class="producto-imagen" src="${producto.imagen}" alt="${producto.sector}">
                <div class="producto-detalles">
                 <h3 class="producto-titulo">${producto.sector}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}"> Agregar a carrito </button>
                </div>
             `;


         cajonProductos.append(div);
    });


    
})

function actualizarBotonesAgregar () {
   botonesAgregar = document.querySelectorAll(".producto-agregar");

   botonesAgregar.forEach (boton => {
       boton.addEventListener("click", agregarAlCarrito); 
   });
}

let productosEnCarrito;

let productosEnCarritoLS= localStorage.getItem("productos-en-carrito");



if (productosEnCarritoLS) {
   productosEnCarrito= JSON.parse(productosEnCarritoLS);
   actualizarAcumulador();
  
} else {
   productosEnCarrito = [];
}


function agregarAlCarrito (e) {
  
   const idBoton= e.currentTarget.id;
   const productoAgregado = productos.find (producto => producto.id === idBoton);
  
   if (productosEnCarrito.some (producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex (producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;

   } else {
       productoAgregado.cantidad= 1; 
       productosEnCarrito.push(productoAgregado);
   } 

   actualizarAcumulador();
  
   localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}       

function actualizarAcumulador(){
   let nuevoAcumulador = productosEnCarrito.reduce ((acc, producto) => acc + producto.cantidad, 0);
   acumulador.innerText = nuevoAcumulador;
}