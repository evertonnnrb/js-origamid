const pessoa = {
    nome : 'Madruda',
    idade : 55,
    profissao : 'Vagal',
    isInadiplente : true
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.profissao)
console.log(pessoa.isInadiplente)

const quadrado = {
    lados : 4,
    area : function(lado){
        return lado * lado;
    },
    perimetro : function(lado){
        return this.lados * lado;
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))