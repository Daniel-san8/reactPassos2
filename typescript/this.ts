const botaao = document.querySelector("button");

// function handleClick(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this);
// }

botaao?.addEventListener("click", handleClick);

function handleClick(event: MouseEvent) {
  const elemento = event.currentTarget;
  if (elemento instanceof HTMLElement) console.log(elemento.innerText);
}
