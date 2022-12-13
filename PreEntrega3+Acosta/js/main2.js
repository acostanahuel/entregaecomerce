const listado = document.getElementById("listado");



const listadoProductos= "json/stock.json";



fetch(listadoProductos)
   .then (resp => resp.json())
   .then (stock => {
         stock.forEach(producto => {
            listado.innerHTML += `
                        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.sector}">
                        <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.sector}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button onclick="agregarAlCarrito(${producto.id})" class="producto-agregar" id="${producto.id}"> Agregar a carrito </button>
                        </div>
                        `;                  ///aca intento hacer la funcion agregar al carrito///
                       
                             
                     });

 });
             
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
