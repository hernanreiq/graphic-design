var contenedor_tarjetas = document.getElementById('contenedor-tarjetas');
var fotos_carrusel = document.getElementById('fotos-carrusel');
var ventana_emergente_texto = document.getElementById('VentanaEmergenteTexto');

var proyectos = [{
  nombre: 'Ed Stylish',
  tipo_proyecto: 'Tienda virtual de ropa pre-amada y nueva',
  cantidad_fotos: 6
},{
  nombre: 'El Piloto Tour',
  tipo_proyecto: 'Grupo de turismo en República Dominicana',
  cantidad_fotos: 5
}];

function creadorDeTarjetas(){
  var cantidad_proyectos = proyectos.length;
  for(var i = 0; i < cantidad_proyectos; i++){
    contenedor_tarjetas.innerHTML += `
    <div class="elemento card">
        <img src="img/proyectos/${proyectos[i].nombre}/0.jpg" alt="${proyectos[i].nombre}">
        <div class="card-body">
            <h5 class="card-title">${proyectos[i].nombre}</h5>
            <p class="card-text">${proyectos[i].tipo_proyecto}</p>
            <button onclick="verImagenes(${i})" type="button" class="btn btn-primary" data-toggle="modal" data-target="#VentanaEmergente">Ver diseños</button>
        </div>    
    </div>
    `;
  }
}
creadorDeTarjetas();

function verImagenes(numero_proyecto){
  ventana_emergente_texto.innerHTML = proyectos[numero_proyecto].nombre;
  fotos_carrusel.innerHTML = '';
  for(var i = 0; i < proyectos[numero_proyecto].cantidad_fotos; i++){
    if (i == 0){
      var primeraFoto = 'active';
    } else {
      var primeraFoto = '';
    }
    fotos_carrusel.innerHTML += `
    <div class="carousel-item ${primeraFoto}">
      <img src="img/proyectos/${proyectos[numero_proyecto].nombre}/${i}.jpg" class="d-block fotos-modal" alt="${proyectos[numero_proyecto].nombre}">
    </div>
    `;
  }
}

/* EFECTO MASONRY */
var elem = document.querySelector('#contenedor-tarjetas');
var msnry = new Masonry( elem, {
  itemSelector: '.elemento'
});
var msnry = new Masonry( '#contenedor-tarjetas', {});