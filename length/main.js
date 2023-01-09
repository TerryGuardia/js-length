// function message() {
//     let str = prompt("Veuillez écrire votre message :");
//     str = str[0].toUpperCase() + str.substring(1, str.length - 1);
//     alert(str.length +" "+ str);
// }
// message();

function chaine(params) {
    let taille = params.length;
    console.log(taille);
    return params[0].toUpperCase() + params.slice(1, -1);
}
console.log(chaine('bonjour je suis'));