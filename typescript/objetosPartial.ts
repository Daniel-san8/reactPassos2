interface Produtooa {
  nome: string;
  quantidade: number;
}

const produto1 = {
  nome: "Notebook",
  quantidade: 10,
  cor: "Azul",
};

const produto2 = {
  nome: "Geladeira",
  quantidade: 30,
  freezer: true,
};

const servico1 = {
  nome: "Instalação",
};

function mostrarQuantidade(produto: Produtooa) {
  console.log(produto.quantidade + 20);
}

mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
// mostrarQuantidade(servico1);

function mostrarQuantidadePartial(produto: Partial<Produtooa>) {
  if (produto.quantidade) console.log(produto.quantidade + 20);
}

mostrarQuantidadePartial(produto1);
mostrarQuantidadePartial(produto2);
mostrarQuantidadePartial(servico1);

interface Posta {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Posta = {
  titulo: "Como aprender HTML",
  visualizacoes: 3000,
  tags: ["HTML", "Front End"],
  autor: "Daniel San",
};

if (typeof artigo.autor === "string") {
  artigo.autor.toUpperCase();
}

interface ObjetoLiteral {
  [key: string]: unknown;
}

type ObjetoLiteral2 = Record<string, unknown>;

function mostrarTitulo(obj: ObjetoLiteral2) {
  if (obj && typeof obj === "object" && "titulo" in obj) {
    console.log(obj.titulo);
  }
}

// mostrarTitulo(200); SÓ PODE OBJETO LITERAL
mostrarTitulo({
  titulo: "HTML e CSS",
});
