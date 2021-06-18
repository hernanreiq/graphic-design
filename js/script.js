/* CONTENIDO DEL DOM PARA MANIPULAR MAS ADELANTE */
var contenedor_tarjetas = document.getElementById('contenedor-tarjetas');
var fotos_carrusel = document.getElementById('fotos-carrusel');
var ventana_emergente_texto = document.getElementById('VentanaEmergenteTexto');
var controles_carrusel = document.getElementById('controles-carrusel');

/* MATRIZ DE OBJETOS CON LAS INFORMACIONES DE LAS IMAGENES PARA LAS TARJETAS */
var proyectos = [{
  nombre: 'Ed Stylish',
  tipo_proyecto: 'Tienda virtual de ropa pre-amada y nueva.',
  cantidad_fotos: 6,
  formato: 'jpg'
},{
  nombre: 'Golden Lottery',
  tipo_proyecto: 'Composición web de una lotería virtual.',
  cantidad_fotos: 1,
  formato: 'jpg'
},{
  nombre: 'El Piloto Tour',
  tipo_proyecto: 'Grupo de turismo en República Dominicana.',
  cantidad_fotos: 5,
  formato: 'jpg'
},{
  nombre: 'Logo de CloudNet',
  tipo_proyecto: 'Logo de una empresa ficticia (Tarea de la universidad).',
  cantidad_fotos: 1,
  formato: 'jpg'
},{
  nombre: 'Planes de CloudNet',
  tipo_proyecto: 'Planes de una empresa ficticia (Tarea de la universidad).',
  cantidad_fotos: 3,
  formato: 'jpg'
},{
  nombre: 'Agentes Inteligentes',
  tipo_proyecto: 'Portada de presentación de una investigación (Tarea de la universidad).',
  cantidad_fotos: 1,
  formato: 'png'
},{
  nombre: 'Sarai Bufet',
  tipo_proyecto: 'Venta de comida tipo bufet para eventos.',
  cantidad_fotos: 1,
  formato: 'jpg'
},{
  nombre: 'Brochure del catálogo de servicios de CloudNet',
  tipo_proyecto: 'Catálogo de servicios de una empresa ficticia (Tarea de la universidad).',
  cantidad_fotos: 3,
  formato: 'jpg'
},{
  nombre: 'Logo de Oziris',
  tipo_proyecto: 'Tienda de variedades.',
  cantidad_fotos: 1,
  formato: 'jpg'
},{
  nombre: 'Logo de Earn Golden Money',
  tipo_proyecto: 'Logo para una web de pagos por clics en anuncios.',
  cantidad_fotos: 1,
  formato: 'jpg'
},{
  nombre: 'Layout de Earn Golden Money',
  tipo_proyecto: 'Composición web de la página principal de Earn Golden Money.',
  cantidad_fotos: 1,
  formato: 'jpg'
},{
  nombre: 'La magia de organizarse',
  tipo_proyecto: 'Portada de un libro ficticio de Hernan.',
  cantidad_fotos: 1,
  formato: 'jpg'
},{
  nombre: 'Logo de Soft App Web',
  tipo_proyecto: 'Logo de una empresa ficticia (Tarea de la universidad).',
  cantidad_fotos: 1,
  formato: 'jpg'
}];

/* CREADOR TARJETAS CON LAS IMAGENES Y DESCRIPCIONES DE LOS PROYECTOS */
function creadorDeTarjetas(){
  var cantidad_proyectos = proyectos.length;
  for(var i = 0; i < cantidad_proyectos; i++){
    if(proyectos[i].cantidad_fotos > 1){
      var textoBoton = '<b>Ver diseños</b>';
    } else {
      var textoBoton = '<b>Ver diseño</b>';
    }
    contenedor_tarjetas.innerHTML += `
      <div class="elemento card">
          <div>
            <img src="img/proyectos/${proyectos[i].nombre}/0.${proyectos[i].formato}" class="card-img-top" alt="${proyectos[i].nombre}">
          </div>
          <div class="card-body">
              <h5 class="card-title">${proyectos[i].nombre}</h5>
              <p class="card-text">${proyectos[i].tipo_proyecto}</p>
              <button onclick="verImagenes(${i})" type="button" class="btn btn-color" data-toggle="modal" data-target="#VentanaEmergente">${textoBoton} <span class="badge badge-primary">${proyectos[i].cantidad_fotos}</span></button>
          </div>    
      </div>
    `;
  }
  efectoMasonry();
}

/* FUNCIO QUE ACTIVA LA VENTANA EMERGEN O MODAL CON LAS IMAGENES DE LOS PROYECTOS */
function verImagenes(numero_proyecto){
  ventana_emergente_texto.innerHTML = proyectos[numero_proyecto].nombre;
  fotos_carrusel.innerHTML = '';
  for(var i = 0; i < proyectos[numero_proyecto].cantidad_fotos; i++){
    if (i == 0){
      var primeraFoto = 'active';
    } else {
      var primeraFoto = '';
    }
    if(proyectos[numero_proyecto].cantidad_fotos == 1){
      controles_carrusel.style.visibility = 'hidden';
    } else {
      controles_carrusel.style.visibility = 'visible';
    }
    fotos_carrusel.innerHTML += `
    <div class="carousel-item ${primeraFoto}">
    <img src="img/proyectos/${proyectos[numero_proyecto].nombre}/${i}.${proyectos[numero_proyecto].formato}" class="d-block fotos-modal" alt="${proyectos[numero_proyecto].nombre}">
    </div>
    `;
  }
  efectoMasonry();
}

/* ACTIVANDO LA CREACION DE TARJETAS */
creadorDeTarjetas();

/* FUNCION PARA LA ACTIVACION Y USO DE LA LIBRERIA MACY.JS PARA HACER EL EFECTO BRICKS O MASONRY */
function efectoMasonry(){
  var macyInstance = Macy({
    container: '#contenedor-tarjetas',
    trueOrder: false,
    waitForImages: false,
    margin: 25,
    columns: 4,
    breakAt: {
      1160: 3,
      870: 2,
      585: 1
    }
  });
  macyInstance.recalculate();
}