//Exercício 5

let escolha = parseInt(prompt('Qual a temperatura você quer converter?\n 1. Celsius\n 2. Fahrenheit'));

switch(escolha){
    case 1: 
        celsius(); 
    break
    case 2: 
        fahrenheit(); 
    break
    default: 
        erro(); 
    break
}

function celsius(){
    let tempC = prompt('Qual é a temperatura em Celsius?');
    let tempF = tempC * 1.8 + 32;

    alert(`${tempC} °C é igual a ${tempF} °F`);
}

function fahrenheit(){
    let tempF = prompt('Qual é a temperatura em Fahrenheit?');
    let tempC = (tempF - 32) / 1.8;

    alert(`${tempF} °F é igual a ${tempC} °C`);
}

function erro(){
    alert('Por favor, escolha um número entre 1 e 2');
    escolha = prompt('Qual a temperatura você quer converter?\n 1. Celsius\n 2. Fahrenheit');
}