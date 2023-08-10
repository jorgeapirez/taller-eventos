const Div = document.getElementById('Div');
function alertadiv(){
    alert('hola soy el div')
}
Div.addEventListener('click', alertadiv)

const boton = document.getElementById('boton')
boton.addEventListener('click', function(event){
    event.stopPropagation();
})

