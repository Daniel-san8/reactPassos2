// const nav = document.getElementById("nav");
// const botaoNav = document.querySelector("button");

// function handleClick() {
//   if (!nav?.classList.contains("active")) {
//     nav?.classList.add("active");
//     botaoNav?.setAttribute("aria-expanded", "true");
//     botaoNav?.setAttribute("aria-label", "Fechar Menu");
//   } else {
//     nav?.classList.remove("active");
//     botaoNav?.setAttribute("aria-expanded", "false");
//     botaoNav?.setAttribute("aria-label", "Abrir Menu");
//   }
// }

// nav?.addEventListener("click", handleClick);
const nav = document.getElementById("nav");

function handleClick(event: PointerEvent) {
  const botaoNav = event.currentTarget;
  if (botaoNav instanceof HTMLElement && nav) {
    const active = !nav?.classList.contains("active");
    if (active) {
      nav.classList.add("active");
      botaoNav.setAttribute("aria-expanded", "true");
      botaoNav.setAttribute("aria-label", "Fechar Menu");
    } else {
      {
        nav.classList.remove("active");
        botaoNav.setAttribute("aria-expanded", "false");
        botaoNav.setAttribute("aria-label", "Abrir Menu");
      }
    }
  }
}

nav?.addEventListener("pointerdown", handleClick);
