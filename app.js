function gerarNumeroSecreto(maximo) {
    return Math.floor(Math.random() * maximo) + 1;
}

if (typeof window !== 'undefined') {
    alert('Boas vindas ao jogo do número secreto');
    const numeroMaximo = 5000;
    const numeroSecreto = gerarNumeroSecreto(numeroMaximo);
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

    const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
}

if (typeof module !== 'undefined') {
    module.exports = gerarNumeroSecreto;
}
