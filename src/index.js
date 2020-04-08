window.onload = function(){ 
    let encodeButton = document.getElementById("cifrar");
    let decodeButton = document.getElementById("descifrar");
    
    encodeButton.addEventListener("click", function(){
        let nbr = parseInt(document.getElementById("desplazar").value);
        let message = document.getElementById("enterText").value.toUpperCase();
        let boxDecode = document.getElementById("showText");
        let mensajeCifrado = cipher.encode(nbr, message);
        boxDecode.innerHTML = mensajeCifrado;
        console.log(mensajeCifrado);
    });
    decodeButton.addEventListener("click", function(){
        let nbr = parseInt(document.getElementById("desplazar").value);
        let message = document.getElementById("enterText").value.toUpperCase();
        let boxDecode = document.getElementById("showText");
        let mensajeDescifrado = cipher.decode(nbr, message);
        boxDecode.innerHTML = mensajeDescifrado;
        console.log(mensajeDescifrado);
    });
}