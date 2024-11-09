function isFibonacci(numero) {
    if (numero < 0) return `${numero} não pertence à sequência de Fibonacci.`;
    
    let a = 0, b = 1, proximo = 0;

    while (proximo < numero) {
        proximo = a + b;
        a = b;
        b = proximo;
    }

    if (proximo === numero || numero === 0) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Teste
const numeroInsert = 21;  // Insira o número a ser verificado
console.log(isFibonacci(numeroInsert));
