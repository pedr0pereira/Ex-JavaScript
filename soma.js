function calcularSoma() {    
    let n1 = window.prompt("Introduza o valor do número 1");
    let n2 = window.prompt("Introduza o valor do número 2");
    
    let numero1 = parseFloat(n1);
    let numero2 = parseFloat(n2);
    
    let soma = numero1 + numero2;
    
    document.querySelector("#resultado").innerHTML = "Resultado da soma:"+ soma
}
