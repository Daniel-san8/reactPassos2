const botton = document.querySelector("button");

function handleClick(event: PointerEvent) {
  console.log(event);
}

botton?.addEventListener("pointerdown", handleClick);

function handleScroll(evento: Event) {
  console.log(evento);
}

window.addEventListener("scroll", handleScroll);

function ativarMenu(event: Event) {
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  } else if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
}

document.documentElement.addEventListener("mousedown", ativarMenu);
document.documentElement.addEventListener("touchstart", ativarMenu);
document.documentElement.addEventListener("keydown", ativarMenu);

export {};
