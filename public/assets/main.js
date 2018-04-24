const skull = document.querySelector('#skull');
if (skull) {
    skull.object3D.scale.set(0.001, 0.001, 0.001);
}
var el = document.querySelector('#dan');
var entity = el.querySelector('a-entity');
if (entity) {
    console.log(entity.getAttribute('geometry'))
    el.addEventListener('click', function (evt) {
        console.log('This 2D element was clicked!');
    });
}
