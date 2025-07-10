let fraseUsuario=prompt("Digita la frase que quieres saber si es palindromo")

const esPalindromo=fraseUsuario=>{
    let minusculasFrase=fraseUsuario.toLowerCase().replaceAll(" ","");
    let invertirFrase=minusculasFrase.split('').reverse().join('');

    let palindromo=minusculasFrase===invertirFrase ? "es palindromo":"no es un palindromo"
    return palindromo
}

console.log(esPalindromo(fraseUsuario))