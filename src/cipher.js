const cipher = {
    encode(offset, text) {
        let mensajeCifrado = "";
        for (let i=0; i < text.length; i++){
            let ascii= text.charCodeAt(i);
            let posicion = ((ascii - 65 + parseInt(offset) + 26 * 2)% 26 + 65);
            mensajeCifrado +=String.fromCharCode(posicion);
        }
        return mensajeCifrado;
    },
    decode(offset, text) {
        let mensajeDescifrado = "";
        for (let i=0; i<text.length; i++){
            let ascii= text.charCodeAt(i);
            let posicion = ((ascii - 90 - parseInt(offset) - 26 * 2)% 26 + 90);
            mensajeDescifrado +=String.fromCharCode(posicion);
        }
        return mensajeDescifrado;
    }
}
