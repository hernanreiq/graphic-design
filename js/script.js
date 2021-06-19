/* CONTENIDO DEL DOM PARA MANIPULAR MAS ADELANTE */
var contenedor_tarjetas = document.getElementById('contenedor-tarjetas');
var fotos_carrusel = document.getElementById('fotos-carrusel');
var ventana_emergente_texto = document.getElementById('VentanaEmergenteTexto');
var controles_carrusel = document.getElementById('controles-carrusel');

/* FUNCION PARA OBTENER LOS PROYECTOS DEL ARCHIVO JSON */
var proyectos;
function obtenerProyectosJSON(){
  axios({
    method: 'GET',
    url: 'json/proyectos.json'
  }).then(res=>{
    /* ACTIVANDO LA CREACION DE TARJETAS */
    proyectos = res.data;
    creadorDeTarjetas(proyectos);
  }).catch(err =>{
    console.log('No existe esa ruta!', err);
  })
}

obtenerProyectosJSON();

/* CREADOR TARJETAS CON LAS IMAGENES Y DESCRIPCIONES DE LOS PROYECTOS */
function creadorDeTarjetas(proyectos){
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