let contadorElemento = document.getElementById("contador");
function adicionarClick() {
    contadorElemento = document.getElementById("contador");
    let contador = parseInt(contadorElemento.textContent);
    contador++;
    contadorElemento.textContent = contador;
  }
  
  function resetClick() {
    contadorElemento.textContent = 0;
  }