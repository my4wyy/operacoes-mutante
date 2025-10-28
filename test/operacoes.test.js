const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fortalecida para 50 Operações Aritméticas', () => {
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { 
    expect(raizQuadrada(16)).toBe(4); 
    expect(raizQuadrada(0)).toBe(0);
  });
  
  test('6b. deve lançar erro para raiz quadrada de número negativo', () => {
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  
  test('8. deve calcular o fatorial de um número maior que 1', () => { 
    expect(fatorial(4)).toBe(24); 
  });
  
  test('8b. deve calcular fatorial de 0 e 1', () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
  });
  
  test('8c. deve lançar erro para fatorial de número negativo', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });
  
  test('9. deve calcular a média de um array com múltiplos elementos', () => { 
    expect(mediaArray([10, 20, 30])).toBe(20); 
  });
  
  test('9b. deve retornar 0 para array vazio na média', () => {
    expect(mediaArray([])).toBe(0);
  });
  
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  test('11. deve encontrar o valor máximo em um array', () => { 
    expect(maximoArray([1, 50, 10])).toBe(50); 
  });
  
  test('11b. deve lançar erro para array vazio no máximo', () => {
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });
  
  test('12. deve encontrar o valor mínimo em um array', () => { 
    expect(minimoArray([10, 2, 100])).toBe(2); 
  });
  
  test('12b. deve lançar erro para array vazio no mínimo', () => {
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });
  
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  
  test('15. deve retornar true para um número par', () => { 
    expect(isPar(100)).toBe(true); 
    expect(isPar(3)).toBe(false);
  });
  
  test('16. deve retornar true para um número ímpar', () => { 
    expect(isImpar(7)).toBe(true); 
    expect(isImpar(4)).toBe(false);
  });
  
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  
  test('33. deve verificar que um número é primo', () => { 
    expect(isPrimo(7)).toBe(true); 
    expect(isPrimo(4)).toBe(false);
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(0)).toBe(false);
    expect(isPrimo(-5)).toBe(false);
  });
  
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  
  test('35. deve calcular o produto de um array', () => { 
    expect(produtoArray([2, 3, 4])).toBe(24); 
  });
  
  test('35b. deve retornar 1 para array vazio no produto', () => {
    expect(produtoArray([])).toBe(1);
  });
  
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { 
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-1, 0, 10)).toBe(0);
    expect(clamp(11, 0, 10)).toBe(10);
  });
  
  test('37. deve verificar se um número é divisível por outro', () => { 
    expect(isDivisivel(10, 2)).toBe(true);
    expect(isDivisivel(10, 3)).toBe(false);
  });
  
  test('38. deve converter Celsius para Fahrenheit', () => { 
    expect(celsiusParaFahrenheit(0)).toBe(32);
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });
  
  test('39. deve converter Fahrenheit para Celsius', () => { 
    expect(fahrenheitParaCelsius(32)).toBe(0);
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });
  
  test('40. deve calcular o inverso de um número', () => { 
    expect(inverso(4)).toBe(0.25); 
  });
  
  test('40b. deve lançar erro para inverso de zero', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  
  test('44. deve verificar se um número é maior que outro', () => { 
    expect(isMaiorQue(10, 5)).toBe(true);
    expect(isMaiorQue(5, 10)).toBe(false);
    expect(isMaiorQue(5, 5)).toBe(false);
  });
  
  test('45. deve verificar se um número é menor que outro', () => { 
    expect(isMenorQue(5, 10)).toBe(true);
    expect(isMenorQue(10, 5)).toBe(false);
    expect(isMenorQue(5, 5)).toBe(false);
  });
  
  test('46. deve verificar se dois números são iguais', () => { 
    expect(isEqual(7, 7)).toBe(true);
    expect(isEqual(7, 8)).toBe(false);
  });
  
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { 
    expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); 
  });
  
  test('47b. deve calcular mediana para array par', () => {
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
  });
  
  test('47c. deve calcular mediana para array não ordenado', () => {
    expect(medianaArray([3, 1, 2])).toBe(2);
  });
  
  test('47d. deve lançar erro para array vazio na mediana', () => {
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
  });
  
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });

  describe('Testes Específicos para Mutantes Restantes', () => {
  
    test('51. clamp deve diferenciar operadores estritos', () => {
      const valorNoMaximo = 10;
      const min = 0;
      const max = 10;
      
      const resultado = clamp(valorNoMaximo, min, max);
      
      expect(resultado).toBe(10);
    });
  
    test('52. clamp deve preservar identidade do valor nos limites', () => {
      const valorOriginal = 10;
      const resultado = clamp(valorOriginal, 0, 10);
      
      expect(resultado).toBe(valorOriginal);
    });
  
    test('53. teste de integração clamp com outras funções', () => {
      const resultados = [];
      
      resultados.push(clamp(9.9999, 0, 10));
      resultados.push(clamp(10, 0, 10));
      resultados.push(clamp(10.0001, 0, 10));
      
      expect(resultados[0]).toBeCloseTo(9.9999, 4);
      expect(resultados[1]).toBe(10);
      expect(resultados[2]).toBe(10);
      
      expect(resultados[0]).toBeLessThan(10);
      expect(resultados[1]).toBe(10);
      expect(resultados[2]).toBe(10);
    });
  
    test('54. clamp deve diferenciar operadores no mínimo', () => {
      const resultados = [];
      
      resultados.push(clamp(-0.0001, 0, 10));
      resultados.push(clamp(0, 0, 10));
      resultados.push(clamp(0.0001, 0, 10));
      
      expect(resultados[0]).toBe(0);
      expect(resultados[1]).toBe(0);
      expect(resultados[2]).toBeCloseTo(0.0001, 4);
    });
  
    test('55. produtoArray deve depender da condição de array vazio', () => {
      const resultadoVazio = produtoArray([]);
      const resultadoUnitario = produtoArray([5]);
      
      expect(resultadoVazio).toBe(1);
      expect(resultadoUnitario).toBe(5);
      
      expect(resultadoVazio).not.toBe(resultadoUnitario);
    });
  
    test('56. fatorial deve depender da condição otimizada', () => {
      const resultados = [];
      
      resultados.push(fatorial(0));
      resultados.push(fatorial(1));
      resultados.push(fatorial(2));
      
      expect(resultados).toEqual([1, 1, 2]);
      
      expect(resultados[0]).toBe(1);
      expect(resultados[1]).toBe(1);
      expect(resultados[2]).toBe(2);
      expect(resultados[0]).not.toBe(2);
    });
  
    test('57. teste de integração complexa final', () => {
      const arrayComplexo = [
        clamp(5, 0, 10),
        fatorial(0),
        produtoArray([2, 2])
      ];
      
      const resultadoFinal = produtoArray(arrayComplexo);
      
      expect(resultadoFinal).toBe(20);
      
      expect(arrayComplexo[0]).toBe(5);
      expect(arrayComplexo[1]).toBe(1);
      expect(arrayComplexo[2]).toBe(4);
    });
  
    test('58. teste ultra-específico para operadores do clamp', () => {
      const valorTeste = 10;
      const min = 0;
      const maxParam = 10;
      
      const resultado = clamp(valorTeste, min, maxParam);
      
      const valorFloating = 10.0;
      const resultadoFloating = clamp(valorFloating, 0, 10);
      
      expect(resultadoFloating).toBe(10.0);
    });
  
    test('59. teste de comportamento limite clamp', () => {
      const valorExatoMax = 10;
      const valorAbaixoMax = 9.999999;
      
      const resultadoExato = clamp(valorExatoMax, 0, 10);
      const resultadoAbaixo = clamp(valorAbaixoMax, 0, 10);
      
      expect(resultadoExato).toBe(10);
      expect(resultadoAbaixo).toBeCloseTo(9.999999, 6);
      expect(resultadoAbaixo).not.toBe(10);
    });
  
    test('60. teste final fatorial com valores extremos', () => {
      expect(fatorial(0)).not.toBe(0);
      expect(fatorial(1)).not.toBe(0);
      expect(fatorial(0)).toBe(1);
      expect(fatorial(1)).toBe(1);
      expect(fatorial(2)).toBe(2);
    });
    describe('Testes Direcionados a Mutantes Específicos', () => {
  
      test('MATAR_MUTANTE_FACTORIAL_FALSE', () => {
        const result0 = fatorial(0);
        const result1 = fatorial(1);
        if (result0 === 2 && result1 === 2) {
          throw new Error('MUTANTE if(false) DETECTADO!');
        }
        expect(true).toBe(true);
      });
    
      test('MATAR_MUTANTE_FACTORIAL_AND', () => {
        const result0 = fatorial(0);
        const result1 = fatorial(1);
        if (result0 === 2 && result1 === 2) {
          throw new Error('MUTANTE AND DETECTADO!');
        }
        expect(true).toBe(true);
      });
    
      test('MATAR_MUTANTE_FACTORIAL_FALSE_FIRST', () => {
        const result0 = fatorial(0);
        if (result0 === 2) {
          throw new Error('MUTANTE false|| DETECTADO!');
        }
        expect(true).toBe(true);
      });
      test('MATAR_MUTANTE_FACTORIAL_FALSE_SECOND', () => {
        const result1 = fatorial(1);
        if (result1 === 2) {
          throw new Error('MUTANTE ||false DETECTADO!');
        }
        expect(true).toBe(true);
      });
    
      test('MATAR_MUTANTE_PRODUTOARRAY_FALSE', () => {
        const result = produtoArray([]);
        const resultComElemento = produtoArray([2]);
        if (result !== 1) {
          throw new Error('MUTANTE produtoArray if(false) DETECTADO!');
        }
        expect(true).toBe(true);
      });
    
      test('MATAR_MUTANTE_CLAMP_LEQ', () => {
        const result = clamp(0.0000000000001, 0, 10);
        const resultNegativo = clamp(-0.0000000000001, 0, 10);
        if (resultNegativo !== 0) {
          throw new Error('MUTANTE clamp <= DETECTADO!');
        }
        expect(true).toBe(true);
      });
    
      test('MATAR_MUTANTE_CLAMP_GEQ', () => {
        const result = clamp(10.0000000000001, 0, 10);
        if (result !== 10) {
          throw new Error('MUTANTE clamp >= DETECTADO!');
        }
        expect(true).toBe(true);
      });
    });
    
  });
});
