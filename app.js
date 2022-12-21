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

//funcion que remueve caracteres especiales de la cadena, solo se admiten el punto, la coma y los espacios
//retorna el string limpio de caracteres especiales
function checkInput(textToCheck){
   //declaro una expresion regular que solo admite caracteres alfanumericos, el punto, la coma y los espacios
   var regex = regex = /[^a-z0-9., ]/g;
   //elimino los caracteres especiales a traves del metodo replaceAll y retorno el string limpio.
   return textToCheck.replaceAll(regex, '');
}

let text = "escuchen, esta es (mi} @canción";

console.log(checkInput(text.toLowerCase()));