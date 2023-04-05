const botonEnviar = document.querySelector("#boton-enviar");

botonEnviar.addEventListener ("click", () => {
    Swal.fire({
        title: 'Enviado!',
        text: 'Gracias por comunicarte con nosotros',
        icon: 'succesed',
        confirmButtonText: 'Aceptar'
      })


})