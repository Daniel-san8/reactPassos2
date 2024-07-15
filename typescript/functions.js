function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 4);
var subtrair = function (a, b) {
    return a - b;
};
subtrair(4, 3);
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela("black");
var btn = document.querySelector("button");
btn === null || btn === void 0 ? void 0 : btn.click();
function isString(value) {
    if (typeof value === "string")
        return true;
}
console.log(isString("ok"));
console.log(isString(true));
