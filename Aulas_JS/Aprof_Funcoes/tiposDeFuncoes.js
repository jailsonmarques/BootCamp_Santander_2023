// Criando uma calculadora para ser reproduzida no prompt do navegador

function calculadora() {
  const operacao = prompt('Escolha uma operação:\n1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão (/)\n 5 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)');

  if (!operacao || operacao >= 7) {
    alert('Operação inválida!');
    calculadora();
  } else {
    let n1 = Number(prompt('Digite o primeiro número: '));
    let n2 = Number(prompt('Digite o segundo número: '));
    let resultado;

    if (!n1 || !n2) {
      alert('Erro! Parâmentros Inválidos!');
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }
      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }
      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão ente ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
      }
      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert('Até mais');
        } else {
          alert('Opção inválida!');
          novaOperacao();
        }
      }
    }

    switch (operacao) {
      case '1':
        soma();
        break;
      case '2':
        subtracao();
        break;
      case '3':
        multiplicacao();
        break;
      case '4':
        divisaoReal();
        break;
      case '5':
        divisaoInteira();
        break;
      case '6':
        potenciacao();
        break;
    }
  }
}


calculadora();
