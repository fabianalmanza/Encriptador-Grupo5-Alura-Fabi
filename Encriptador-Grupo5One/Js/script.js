function encriptar() {
    let text = document.getElementById("text").value.toLowerCase();
    let result = encriptarTexto(text);
  
    document.getElementById("text").value = "";
    mostrarResultado(result);
  }
  
  function desencriptar() {
    let text = document.getElementById("text").value.toLowerCase();
    let result = desencriptarTexto(text);
  
    document.getElementById("text").value = "";
    mostrarResultado(result);
  }
  
  function copiar() {
    let resultTextArea = document.getElementById("result");
    resultTextArea.select();
    resultTextArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
  
    resultTextArea.value = "";
    resultTextArea.classList.add("hidden");
    
    alert("Texto copiado");
  }
  
  function encriptarTexto(text) {
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    return text;
  }
  
  function desencriptarTexto(text) {
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text;
  }
  
  function mostrarResultado(result) {
    let resultTextArea = document.getElementById("result");
    resultTextArea.value = result;
    resultTextArea.classList.remove("hidden");
  }
  