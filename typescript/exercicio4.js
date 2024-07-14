var linkks = document.querySelectorAll(".links");
function mudaEstilo(elemento) {
    elemento.style.color = "red";
    elemento.style.border = "2px solid yellow";
}
linkks.forEach(function (link) {
    if (link instanceof HTMLElement) {
        mudaEstilo(link);
    }
});
