let productosGlobal = [];

$(document).ready(function() {

    $('#cargar').click(function() {
        cargarProductos();
    });


    $('#limpiar').click(function() {
        $('#lista').html('');
    });


    $('#buscador').on('input', function() {

        let texto = $(this).val().toLowerCase();

        let filtrados = productosGlobal.filter(p =>p.title.toLowerCase().includes(texto));

        mostrarProductos(filtrados);
    });


    $('#agregar').click(function() {

        let nombre = $('#nombre').val();
        let precio = $('#precio').val();

        $.post('https://dummyjson.com/products/add', {title: nombre, price: precio}, function(respuesta){alert("Producto agregado (falso): " + respuesta.title);}

        );
    });
});


function cargarProductos() {

    $.get('https://dummyjson.com/products', function(data) {productosGlobal = data.products;

        mostrarProductos(productosGlobal);

    });
}

function mostrarProductos(productos) {

    $('#lista').html('');

    productos.forEach(p => {

        $('#lista').append(`
        <div class="producto">
        <h3>${p.title}</h3>
        <p>$${p.price}</p>
        <button onclick="verDetalle(${p.id})">Ver detalle</button>
        </div>
        `);
    });
}


function verDetalle(id) {

    $.get(`https://dummyjson.com/products/${id}`, function(p) {alert(`Producto: ${p.title}\nPrecio: $${p.price}`);}
    );
}