
/* const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
}

console.log(getRandom(colors)) */


const getRandom = (array) => {
    let numero = Math.floor(Math.random() * array.length);
    return array[numero];
};


const coloresParrafo = [
    "#264653", 
    "#2A9D8F", 
    "#E9C46A", 
    "#F4A261", 
    "#E76F51"
];

const coloresBloque = [
    "#CDB4DB", 
    "#FFC8DD", 
    "#FFAFCC", 
    "#BDE0FE", 
    "#A2D2FF"
];


const gifs = [
    "assets/magic-1.gif",
    "assets/magic-2.gif",
    "assets/magic-3.gif",
    "assets/magic-4.gif",
    "assets/magic-5.gif",
    "assets/magic-6.gif"
];






document.addEventListener("click", function (event) {
    event.preventDefault();
});

let imagenes = document.querySelectorAll("img");

imagenes.forEach(function (imagen) {
    let imagenOriginal;

    imagen.addEventListener("mouseenter", function () {
        imagenOriginal = imagen.getAttribute("src");
        imagen.setAttribute("src", "assets/abracadabra.gif");
    });

    imagen.addEventListener("mouseleave", function () {
        imagen.setAttribute("src", imagenOriginal);
    });

    imagen.addEventListener("click", function () {
        let gif = getRandom(gifs);
        imagen.setAttribute("src", gif);
        imagenOriginal = gif; 
    });
});





let parrafos = document.querySelectorAll("p");

parrafos.forEach(function (parrafo) {
    let colorOriginal;
    let fondoOriginal;

    parrafo.addEventListener("mouseenter", function () {
        colorOriginal = parrafo.style.color;
        fondoOriginal = parrafo.style.backgroundColor;

        let texto = getRandom(coloresParrafo);
        let fondo = getRandom(coloresParrafo.filter((c) => c !== texto));
        parrafo.style.color = texto;
        parrafo.style.backgroundColor = fondo;
    });

    parrafo.addEventListener("mouseleave", function () {
        parrafo.style.color = colorOriginal;
        parrafo.style.backgroundColor = fondoOriginal;
    });

    parrafo.addEventListener("click", function () {
        let texto = getRandom(coloresParrafo);
        let fondo = getRandom(coloresParrafo.filter((c) => c !== texto));
        parrafo.style.color = texto;
        parrafo.style.backgroundColor = fondo;


        colorOriginal = texto;
        fondoOriginal = fondo;
    });
});




let bloques = document.querySelectorAll("article, section");

bloques.forEach(function (bloque) {
    let fondoOriginal;

    bloque.addEventListener("mouseenter", function () {
        fondoOriginal = bloque.style.backgroundColor;
        bloque.style.backgroundColor = getRandom(coloresBloque);
    });

    bloque.addEventListener("mouseleave", function () {
        bloque.style.backgroundColor = fondoOriginal;
    });

    bloque.addEventListener("click", function (event) {
        if (event.target !== bloque) return;

        let fondo = getRandom(coloresBloque);
        bloque.style.backgroundColor = fondo;
        fondoOriginal = fondo;
    });
});