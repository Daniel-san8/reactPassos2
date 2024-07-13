var Produtoo = /** @class */ (function () {
    function Produtoo(name, preco) {
        var _this = this;
        this.precoReal = function () {
            return "R$: ".concat(_this.preco);
        };
        this.name = name;
        this.preco = preco;
    }
    return Produtoo;
}());
var livroo = new Produtoo("Fundamentos Apostólicos", 200);
livroo.name;
livroo.preco;
livroo.precoReal();
console.log(livroo instanceof Produtoo);
var Livro = /** @class */ (function () {
    function Livro(autor) {
        this.autor = autor;
    }
    return Livro;
}());
var Jogadores = /** @class */ (function () {
    function Jogadores(jogadores) {
        this.jogadores = jogadores;
    }
    return Jogadores;
}());
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("J. R. R Tolkien");
    }
    if (busca === "Dark Souls") {
        return new Jogadores(1);
    }
    return null;
}
buscarProduto("O Hobbit");
