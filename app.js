//declaro array que contiene las llave para el cifrado
const cipherKey = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
]
//obtengo los botones para codificar y decodificar el texto
const btnEncode = document.querySelector(".app__btn_encode");
const btnDecode = document.querySelector(".app__btn_decode");
//obtengo el boton para copiar el texto codioficado/decodificado
const btnCopy = document.querySelector(".btn__copy");

//si el navegador no soporta clipboard deshabilito el boton de copiar
if(!navigator.clipboard){
    btnCopy.disabled = true;
    alert("Este navegador no soporta el copiado de texto al clipboard, el boton de copiado de texto se deshabilitara.");
}

//declaro funcion para codificar
//retorna la cadena encriptada;
function encode(textToEncode){
    let stringEncode = checkInput(textToEncode.toLowerCase());
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

//funcion que remueve caracteres especiales de la cadena.
//retorna el string limpio de caracteres especiales
function checkInput(textToCheck){
   //declaro una expresion regular para descartar caracteres no admitidos
   var regex = regex = /[^a-z0-9.,¡!¿? ]/g;
   //elimino los caracteres especiales a traves del metodo replaceAll y retorno el string limpio.
   return textToCheck.replaceAll(regex, '');
}

//eventos para asociar el boton con la accion a realizar
btnEncode.addEventListener('click', ()=> {
    let textToEncode = document.querySelector("#input__encode").value;
    let textEncoded = encode(textToEncode);
    document.querySelector(".result__text").innerHTML = textEncoded;
});
btnDecode.addEventListener('click', ()=>{
    let textToDecode = document.querySelector("#input__encode").value;
    let textDecoded = decode(textToDecode);
    document.querySelector(".result__text").innerHTML = textDecoded;
});
//evento para copiar texto
btnCopy.addEventListener('click', ()=>{
    let content = document.querySelector(".result__text").innerHTML;
    navigator.clipboard.writeText(content);
});
