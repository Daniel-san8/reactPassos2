async function consumirApi() {
  const chama = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await chama.json();
  console.log(json);
}
consumirApi;
export {};
