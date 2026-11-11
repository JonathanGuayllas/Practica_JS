// 1. Buscamos los elementos del DOM
const tarjeta = document.querySelector("#tarjeta");
const botonAzul = document.querySelector("#btnAzul");
const botonVerde = document.querySelector("#btnVerde");
const botonRojo = document.querySelector("#btnRojo");
const botonRestablecer = document.querySelector("#btnRestablecer");

// 2. Escuchamos la llamada del click

// Botón azul
botonAzul.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "blue"; // Puedes usar "blue" si lo quieres más oscuro
});

// Botón Verde
botonVerde.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "green";
});

// Botón Rojo
botonRojo.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "red";
});

// Restablecer
botonRestablecer.addEventListener("click", function () {
    tarjeta.style.backgroundColor = "white";
});