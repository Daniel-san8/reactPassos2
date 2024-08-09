interface Post {
  nome: string;
  preco: number;
  novo: boolean;
}

let chave: keyof Post;

//chave pode ser 'nome', 'preco' ou 'novo'

function cordenadas(x: number, y: number) {
  return { x, y };
}

let coord: typeof cordenadas;

coord = (x: number, y: number) => {
  return {
    x,
    y,
  };
};

interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

function selecionar<Chave extends keyof Elementos>(
  seletor: Chave
): Elementos[Chave] | null {
  return document.querySelector(seletor);
}

selecionar("a")?.href;
