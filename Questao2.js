function verificarLetraA(str) {

    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let char of lowerStr) {
        if (char === 'a') {
            count++;
        }
    }

    if (count > 0) {
        return `A letra 'a' ocorre ${count} vez(es) na string.`;
    } else {
        return `A letra 'a' não ocorre na string.`;
    }
}

const string = "Abracadabra";  // Substitua por qualquer string
console.log(verificarLetraA(string));