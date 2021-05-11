var assert = require('assert');

var soma = require('../src/soma');

describe('Iniciando teste gerais no arquivo soma.js', function(){
    it('Executando a função soma', function(){
        assert.strictEqual(soma(5, 10), 15);
    });
});