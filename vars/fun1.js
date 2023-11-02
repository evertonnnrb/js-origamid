function areaQuadrado(a){
    return a * a;
}

console.log(areaQuadrado(2))


function corFavorita(cor){
    if(cor === 'Azul'){
        return 'A cor do ceu';
    }else if(cor == 'Preto'){
        return 'A cor da noite';
    }else if(cor === 'Amarelo'){
        return 'E a cor do sol';
    }else{
        return 'Nenhum cor selecionada';
    }
}

addEventListener('click',function(){
    console.log('clicou aqui')
})

function coletaDados(nome, idade, profissao){
    return `Nome: ${nome} \nIdade: ${idade}\nProfissão: ${profissao}`;
}

function isThruty(dado){
    return !!dado;
}

function retonarAreaQuadrado(a,b,c,d){
    return a + b + c + d;
}

function nomeCompleto(nome, sobrenome){
    return `Nome completo : ${nome} ${sobrenome}`;
}

function isPar(num){
    return num % 2 == 0;
}

addEventListener('scroll',console.log(nomeCompleto('Everton','Ribeiro')));