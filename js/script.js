var elem = document.querySelector('.contenedor');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.elemento'
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.contenedor', {
  // options
});