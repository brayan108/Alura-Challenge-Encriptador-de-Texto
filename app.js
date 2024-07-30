

let encryptText = document.getElementById('encryptText');
let decryptText = document.getElementById('decryptText');   
let copyText = document.getElementById('copyText');


encryptText.addEventListener('click', () => {
    
    const textarea = document.getElementById('inputText');
    const outPutArea = document.getElementById('outputText');

    let text = textarea.value;

    if (text != '') {
        if (isValidText(text)) {
            text = text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');

                outPutArea.value = text;   
                textarea.value = '';

        } else { alert('El formato de entrada no es correcto!, Solo letras minúsculas sin acentos y sin caracteres especiales.'); }  

    } else { alert('No se introducido ningun mensaje!.');  }
});


decryptText.addEventListener('click', () => {

    const textarea = document.getElementById('inputText');
    const outPutArea = document.getElementById('outputText');

    let text = textarea.value;

    if (text != '') {
         if (isValidText(text)) {
            text = text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');

                outPutArea.value = text;
                textarea.value = '';

        } else { alert('El formato de entrada no es correcto!, Solo letras minúsculas sin acentos y sin caracteres especiales.'); }

    } else { alert('No se introducido ningun mensaje!.'); }
    
});

copyText.addEventListener('click', () => {

    let outPutText = document.getElementById('outputText');

    if (outPutText.value != '') {
        if (isValidText(outPutText.value)) {
            outPutText.select();
            outPutText.setSelectionRange(0, 99999);
        
            navigator.clipboard.writeText(outPutText.value);

        } else { alert('El formato de entrada no es correcto!, Solo letras minúsculas sin acentos y sin caracteres especiales.'); }      

    }  else { alert('No se introducido ningun mensaje!.'); }
});



function isValidText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}