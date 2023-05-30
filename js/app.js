const textArea = document.querySelector('.text-area')
const mensaje = document.querySelector('.mensaje')

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptar = encriptar(textArea.value)
    mensaje.value = textoEncriptar
    textArea.value = "";
    mensaje.style.backgroundImage= "none";
}

function encriptar(StringEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    StringEncriptar = StringEncriptar.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        
        if(StringEncriptar.includes(matrizCodigo[i][0])){
            StringEncriptar = StringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        
    }

    return StringEncriptar

}

function btnDesEncriptar() {
    const textoEncriptar = desencriptar(textArea.value)
    mensaje.value = textoEncriptar
    textArea.value = "";
}


function desencriptar(StringDesEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    StringDesEncriptar = StringDesEncriptar.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        
        if(StringDesEncriptar.includes(matrizCodigo[i][1])){
            StringDesEncriptar = StringDesEncriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
        
    }

    return StringDesEncriptar

}