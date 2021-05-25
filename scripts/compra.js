const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra')
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');
const tarjeta = document.getElementById('tarjeta');

cargarEventos();

function cargarEventos(){
    
document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
carrito.addEventListener('click', (e)=>{compra.eliminarProducto(e)});
compra.calcularTotal();
procesarCompraBtn.addEventListener('click', procesarCompra);
}

function procesarCompra(e){
    e.preventDefault();
    if(compra.obtenerProductosLocalStorage().length === 0){
        alert("No hay productos, seleccione alguno.")

    }
    else if (cliente.value === '' || correo.value === '' || tarjeta.value === ''){
        alert("Ingrese los campos requeridos.")
    }
    else {
        const cargandoGif = document.querySelector('#cargando');
        cargandoGif.style.display = 'block';

        const enviado = document.createElement('img');
        enviado.src = "./images/mail.gif"
        enviado.style.display = 'block';
        enviado.width = ' 150';
        setTimeout(() =>{
            cargandoGif.style.display = 'none';
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(() => {
                enviado.remove ();
                compra.vaciarLocalStorage();
                window.location = "index.html";
            }, 3000);
        }, 3000);
             
        
    }


}