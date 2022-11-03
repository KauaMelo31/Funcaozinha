//Exercício 1 e 2

function inicio(){
    let opcao = parseInt(prompt('Qual Pet você quer calcular a idade? (Selecione um número entre 1 e 3)\n 1. Cachorro\n 2. Gato\n 3. Coelho\n 4. Sair'));

    switch (opcao) {
        case 1:
            calcDog();
        break;
        case 2:
            calcGato();
        break;
        case 3:
            calcCoelho();
        break;
        case 4:
            sair();
        break;
        default:
            erro();
        break;
    }
}

function calcDog(){
    //Neste exemplo um ano de vida de cachorro equivale a sete anos humanos.
    let nomeDog = prompt('Qual o nome do seu doguinho?')
    let idadeDog = parseInt(prompt(`Qual a idade do seu doguinho?`));

    while(isNaN(idadeDog) || idadeDog <= 0 || idadeDog >20){
        alert('Informe uma idade válida!');
        idadeDog = parseInt(prompt(`Qual a idade do seu doguinho?`));
    }
    
    let somaDog = idadeDog * 7;
    alert(`${nomeDog} tem ${somaDog} anos em idade humana.`);
    alert(`Um ano de vida de cachorro equivale a sete anos humanos.`);
    inicio();
}

function calcGato(){
    //Para calcular a idade de um gato é necessário somar 15 anos para o primeiro ano de vida e 10 para o segundo ano. A partir do terceiro ano de vida em diante, some quatro anos.
    let somaGato = 0;
    let nomeGato = prompt('Qual o nome do seu gato?')
    let idadeGato = parseInt(prompt(`Qual a idade do seu gato?`));

    while(isNaN(idadeGato) || idadeGato <= 0 || idadeGato >20){
        alert('Informe uma idade válida!');
        idadeGato = parseInt(prompt(`Qual a idade do seu gato?`));
    }

    if(idadeGato > 2){
        somaGato = ((idadeGato - 2) * 4) + 25 ;
        alert(`${nomeGato} tem ${somaGato} anos em idade humana.`);
    }
    else if(idadeGato === 2){
        alert(`${nomeGato} tem 25 anos em idade humana.`);
    }
    else{
        alert(`${nomeGato} tem 15 anos em idade humana.`);
    }
    
    alert(`Para calcular a idade de um gato é necessário somar 15 anos para o primeiro ano de vida e 10 para o segundo ano, a partir do terceiro ano de vida em diante, é somado quatro anos.`);
    inicio();
}

function calcCoelho(){
    //Um ano de vida de um coelho equivale a 21 anos humanos e para cada ano que passa adiciona mais 6 anos.
    let somaCoelho = 0, idade = 21;
    let nomeCoelho = prompt('Qual o nome do seu coelho?');
    let idadeCoelho = prompt('Qual a idade do seu coelho?');

    while(isNaN(idadeCoelho) || idadeCoelho <= 0 || idadeCoelho >10){
        alert('Informe uma idade válida!');
        idadeCoelho = prompt('Qual a idade do seu coelho?');
    }

    somaCoelho = (idade + (idadeCoelho * 6) - 6);
    alert(`${nomeCoelho} tem ${somaCoelho} anos em idade humana.`);
    alert(`Um ano de vida de um coelho equivale a 21 anos humanos e para cada ano que passa adiciona mais 6 anos.`);
    inicio();
}

function sair(){
    window.close();
}

function erro(){
    alert('Por favor, informe um númeor entre 1 e 4.');
    inicio();
}

inicio();





