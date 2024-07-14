var botaao = document.querySelector("button");
function handleClick(event) {
    console.log(this);
}
botaao === null || botaao === void 0 ? void 0 : botaao.addEventListener("click", handleClick);
