function gerarNumeroSecreto(maximo) {
    return Math.floor(Math.random() * maximo) + 1;
}

if (typeof window === 'undefined') {
    module.exports = gerarNumeroSecreto;
} else {
    alert('Boas vindas ao jogo do número secreto');
    let numeroMaximo = 5000;
    let numeroSecreto = gerarNumeroSecreto(numeroMaximo);
    console.log(numeroSecreto);
    let chute;
    let tentativas = 1;

    while (chute != numeroSecreto) {
        chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
        if (chute == numeroSecreto) {
            break;
        } else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
            tentativas++;
        }
    }

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
}
