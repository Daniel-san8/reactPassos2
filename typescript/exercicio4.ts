const linkks = document.querySelectorAll(".links");

function mudaEstilo(elemento: HTMLElement) {
  elemento.style.color = "red";
  elemento.style.border = "2px solid yellow";
}

linkks.forEach((link) => {
  if (link instanceof HTMLElement) {
    mudaEstilo(link);
  }
});
