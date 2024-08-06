const { body } = document;

console.log(body);

function handleClick({
  pageX,
  target,
}: {
  pageX: PointerEvent;
  target: EventTarget;
}) {
  console.log(pageX, target);
}

body.addEventListener("click", handleClick);
