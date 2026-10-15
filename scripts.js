document.addEventListener("click", function (event) {

    event.preventDefault();

    let elemento = event.target;

    if (elemento.tagName === "IMG") {
        elemento.setAttribute("src", "assets/magic-2.gif");
    }

    if (elemento.tagName === "P") {
        elemento.style.color = "red";
        elemento.style.backgroundColor = "green";
    }

    if (elemento.tagName === "ARTICLE" || elemento.tagName === "SECTION") {
        elemento.style.backgroundColor = "lightblue";
    }

});

let imagenes = document.querySelectorAll("img");

imagenes.forEach(function (imagen) {

    let imagenOriginal = imagen.getAttribute("src");

    imagen.addEventListener("mouseenter", function () {
        imagen.setAttribute("src", "assets/abracadabra.gif");
    });

    imagen.addEventListener("mouseleave", function () {
        imagen.setAttribute("src", imagenOriginal);
    });

});

let parrafos = document.querySelectorAll("p");

parrafos.forEach(function (parrafo) {

    let colorOriginal = parrafo.style.color;
    let fondoOriginal = parrafo.style.backgroundColor;

    parrafo.addEventListener("mouseenter", function () {
        parrafo.style.color = "white";
        parrafo.style.backgroundColor = "orange";
    });

    parrafo.addEventListener("mouseleave", function () {
        parrafo.style.color = colorOriginal;
        parrafo.style.backgroundColor = fondoOriginal;
    });

});

let bloques = document.querySelectorAll("article, section");

bloques.forEach(function (bloque) {

    let fondoOriginal = bloque.style.backgroundColor;

    bloque.addEventListener("mouseenter", function () {
        bloque.style.backgroundColor = "pink";
    });

    bloque.addEventListener("mouseleave", function () {
        bloque.style.backgroundColor = fondoOriginal;
    });

});
