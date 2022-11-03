//Exercício 4

function inicio(){
    let opcao = parseInt(prompt('Calcular propiedades de um círculo:\n 1. Circunferência\n 2. Área\n 3. Sair'));

    switch (opcao) {
        case 1:
            calcularCircunferencia();
        break;
        case 2:
            calcularArea();
        break;
        case 3:
            sair();
        break;
        default:
            erro();
        break;
    }
}

function calcularCircunferencia(){
    let circunf = 0, pi = 3.14;
    
    let raio = parseFloat(prompt('Informe o valor do raio do círculo'));
    
    circunf = 2 * pi * raio
    alert(`A circunferência é: ${circunf}`);
    inicio();
    
}

function calcularArea(){
    let area = 0, pi = 3.14;

    let raio = parseFloat(prompt('Informe o valor do raio do círculo'));
    area = pi * raio**2;

    alert(`A área do círculo é de: ${area}`);
    inicio();
}

function sair() {
    window.close();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 3.');
    inicio();
}

inicio();