var assert = require('assert');

var multiplicar = require('../src/multiplicar');

describe('Executando testes gerais no arquivo mutiplicar.js', function(){
    it('iniciando o teste na função multiplicar', function(){
        assert.strictEqual(multiplicar(5, 5), 25);
    });
});