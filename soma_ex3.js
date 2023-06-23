function calcularSoma() {    
    let n1 = window.prompt("Introduza o valor do número 1");
    let n2 = window.prompt("Introduza o valor do número 2");
    
    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);
     
    let operacao = window.prompt("Introduza a operação (+, -, *, /):");
    let resultado

    switch (operacao) {
        case "+":
            resultado = numero1 + numero2;
            document.querySelector("#resultado").innerHTML = "Resultado da soma: " + resultado;
            break;
        case "-":
            resultado = numero1 - numero2;
            document.querySelector("#resultado").innerHTML = "Resultado da subtração: " + resultado;
            break;
        case "*":
            resultado = numero1 * numero2;
            document.querySelector("#resultado").innerHTML = "Resultado da multiplicação: " + resultado;
            break;
        case "/":
            resultado = numero1 / numero2;
            document.querySelector("#resultado").innerHTML = "Resultado da divisão: " + resultado;
            break;
        default:
            document.querySelector("#resultado").innerHTML = "Operação inválida, tem que introduzir um operador válido como (+ ou - ou * ou /)";
            break;
    }
}
