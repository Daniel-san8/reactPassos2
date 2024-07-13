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
