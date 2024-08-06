var body = document.body;
console.log(body);
function handleClick(_a) {
    var pageX = _a.pageX, target = _a.target;
    console.log(pageX, target);
}
body.addEventListener("click", handleClick);
