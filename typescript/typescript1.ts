function typescript1() {
  const frase: string = "Front End";
  const total = 100.05;
  const empresas: string[] = ["Apple", "Microsoft"];

  // total.toLowerCase();
  frase.toLowerCase();

  total.toFixed(2);

  empresas.map((empresa) => empresa.toLowerCase());

  const body = document.body;

  body.style.background = "black";

  const button = document.querySelector("button");

  button?.click();
}
export { typescript1 };
