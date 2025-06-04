const assert = require('assert');
const gerarNumeroSecreto = require('../app.js');

for (let i = 0; i < 1000; i++) {
    const n = gerarNumeroSecreto(5000);
    assert(n >= 1 && n <= 5000, `Numero fora do intervalo: ${n}`);
}

console.log('Todos os testes passaram');
