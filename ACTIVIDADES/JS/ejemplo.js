/* var Color = document.querySelector(".titulo")
Color.addEventListener('mouseover', CambiarColor)
function CambiarColor(){
    Color.style.color = '#ff0000'
}

var cambiar = document.querySelector ('.titulo')
cambiar.addEventListener('mouseover', CambioTitulo)
function CambioTitulo(){
    cambiar.innerHTML = 'Manu'
}

var titulo = document.querySelector ( ".click" )
var imagen1 = document.querySelector ( ".imagen1" )

titulo.addEventListener ( 'click', mostrarImagen )
function mostrarImagen(){
    imagen1.classList.remove('oculto')
} */

/////////////////////////


var fondo = document.querySelector ( ".fondo" )
var carro = document.querySelector ( ".carro img" )
var llanta1 = document.querySelector (".llanta1 img")
var llanta2 = document.querySelector (".llanta2 img")
var luces = document.querySelector (".luces")
var sprite = document.querySelector ( ".sprite" )

fondo.addEventListener('click', foondoMover)

function foondoMover(){
    fondo.classList.add('fondoMover')
    carro.classList.add('carroMover')
    llanta1.classList.add('llanta1Mover')
    llanta2.classList.add('llanta2Mover')
    luces.classList.remove('oculto')
    luces.classList.add('lucesPrender')
    sprite.classList.remove('oculto')
    sprite.classList.add('spriteMover')
}




