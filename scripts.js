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