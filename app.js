//declaro array que contiene las llave para el cifrado
const cipherKey = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
]

//declaro funcion para codificar
//retorna la cadena encriptada;
function encode(textToEncode){
    let stringEncode = textToEncode;
    cipherKey.forEach(element=>{
        stringEncode = stringEncode.replaceAll(element[0], element[1]);
    });

    return stringEncode;
}

//funcion para decodificar
//retorna una cadena con el texto decodificado
function decode(textEncode){
    let stringDecode = textEncode;
    cipherKey.reverse().forEach(element=>{
        stringDecode = stringDecode.replaceAll(element[1], element[0]);
    });

    return stringDecode;
}