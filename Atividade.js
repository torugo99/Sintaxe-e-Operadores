function compNum(num1, num2) {
    if (!num1 || !num2) return 'Por gentileza defina dois números.'
    
    const primeiraFrase = Frase1(num1, num2);
    const segundaFrase = Frase2(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function Frase1(num1, num2) {
    let saoIguais = '';
    
    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`; 
}

function Frase2(num1, num2) {
    const soma = num1 + num2;
    const comp10 = soma > 10;
    const comp20 = soma > 20;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if(comp10) {
        resultado10 = 'maior';
    }

    if (comp20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(compNum(10, 80));