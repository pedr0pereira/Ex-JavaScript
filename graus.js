function converterTemperatura() {
    let graus = window.prompt("Introduza os graus");
    let tipo = window.prompt("Introduza o tipo de graus (F-fahrenheit ou C-celsius)");
    var resultadoElement = document.getElementById("resultado");
    var resultado;

    if (tipo === "C" || tipo === "c" ) {
        resultado = converterParaFahrenheit(graus);
        resultadoElement.textContent = graus + " graus Celsius são " + resultado.toFixed(2)  + " graus Fahrenheit.";
    } else if (tipo === "F" || tipo === "f" ) {
        resultado = converterParaCelsius(graus);
        resultadoElement.textContent = graus + " graus Fahrenheit são " + resultado.toFixed(2)  + " graus Celsius.";
    }
}

function converterParaFahrenheit(grausCelsius) {
    return (grausCelsius * 9 / 5) + 32;
}

function converterParaCelsius(grausFahrenheit) {
    return (grausFahrenheit - 32) * 5 / 9;
}
