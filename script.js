const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

function btnEncriptar () {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    const matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptadaMinuscula = stringEncriptada.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++) {
        if(stringEncriptadaMinuscula.includes(matrizCodigo[i][0])) {
            stringEncriptadaMinuscula = stringEncriptadaMinuscula.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptadaMinuscula
}

function btnDesencriptar () {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    
    const matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptadaMinuscula = stringDesencriptada.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++) {
        if(stringEncriptadaMinuscula.includes(matrizCodigo[i][1])) {
            stringEncriptadaMinuscula = stringEncriptadaMinuscula.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringEncriptadaMinuscula
}

function btnCopiar() {
    navigator.clipboard.writeText(mensagem.value);
}