const { body } = document;

console.log(body);

function handleClick({
  pageX,
  target,
}: {
  pageX: number;
  target: HTMLElement;
}) {
  console.log(pageX, target);
}

body.addEventListener("click", handleClick);
