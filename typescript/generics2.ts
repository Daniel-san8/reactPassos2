function extractText<Tipo extends HTMLAnchorElement>(el: Tipo) {
  return {
    texto: el.innerText,
    el,
  };
}

const link = document.querySelector("a");

if (link) {
  console.log(extractText(link).el.href);
}

function $<Tipo extends Element>(selector: string): Tipo | null {
  return document.querySelector(selector);
}

const linkk = $<HTMLAnchorElement>("a")?.href;

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
  preco: number;
}

async function handleData() {
  const notebook = await getData<Notebook>(
    "https://api.origamid.dev/json/notebook"
  );
  console.log(notebook);
}

handleData();
