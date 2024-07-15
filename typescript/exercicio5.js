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
var nav = document.getElementById("nav");
function handleClick(event) {
    var botaoNav = event.currentTarget;
    console.log(botaoNav);
    if (!(nav === null || nav === void 0 ? void 0 : nav.classList.contains("active"))) {
        if (botaoNav instanceof HTMLElement) {
            nav === null || nav === void 0 ? void 0 : nav.classList.add("active");
            botaoNav === null || botaoNav === void 0 ? void 0 : botaoNav.setAttribute("aria-expanded", "true");
            botaoNav === null || botaoNav === void 0 ? void 0 : botaoNav.setAttribute("aria-label", "Fechar Menu");
        }
    }
    else {
        if (botaoNav instanceof HTMLElement) {
            nav === null || nav === void 0 ? void 0 : nav.classList.remove("active");
            botaoNav === null || botaoNav === void 0 ? void 0 : botaoNav.setAttribute("aria-expanded", "true");
            botaoNav === null || botaoNav === void 0 ? void 0 : botaoNav.setAttribute("aria-label", "Fechar Menu");
        }
    }
}
nav === null || nav === void 0 ? void 0 : nav.addEventListener("pointerdown", handleClick);
