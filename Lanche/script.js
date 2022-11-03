//Exercício 3

function calcularMeuLanche(){
    const idadeMax = 90;
    idade = parseInt(prompt('Qual a sua idade?'));
    qtd_lanche = prompt('Qual a quantidade de lanches você consome por dia?');
       
    let soma = (idadeMax - idade) * (qtd_lanche * 365);
    alert(`Você precisará de ${soma} lanches para durar até seus ${idadeMax} anos.`)
}

calcularMeuLanche();