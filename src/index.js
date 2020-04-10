import cipher from '../src/cipher.js';
console.log(cipher);
window.onload = function(){ 
    let encodeButton = document.getElementById("cifrar");
    let decodeButton = document.getElementById("descifrar");
    let cleanButton = document.getElementById("erasure");
    encodeButton.addEventListener("click", function(){
        let nbr = parseInt(document.getElementById("desplazar").value);
        let message = document.getElementById("enterText").value.toUpperCase();
        let boxDecode = document.getElementById("showText");
        let mensajeCifrado = cipher.encode(nbr, message);
        boxDecode.value = mensajeCifrado;
    });
    decodeButton.addEventListener("click", function(){
        let nbr = parseInt(document.getElementById("desplazar").value);
        let message = document.getElementById("enterText").value.toUpperCase();
        let boxDecode = document.getElementById("showText");
        let mensajeDescifrado = cipher.decode(nbr, message);
        console.log(mensajeDescifrado);
        boxDecode.value = mensajeDescifrado;
    });
    cleanButton.addEventListener("click", function(){
        let message = document.getElementById("enterText");
        let boxDecode = document.getElementById("showText");
        message.value = "";
        boxDecode.value = "";
    });
}