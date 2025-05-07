
//1
//"La funzione getInitials restituisce le iniziali di un nome completo."
function getInitials(wholeName) {
    const [first, last] = wholeName.split(" ").filter(str => str !== '');
    return `${first.charAt(0).toUpperCase()}.${last.charAt(0).toUpperCase()}`
}

//2.
//La funzione createSlug restituisce una stringa in lowercase.
// function createSlug(str) {
//     return str.toLowerCase()
// }

//3.
//"La funzione average calcola la media aritmetica di un array di numeri."
function average(arr) {
    let sum = 0
    arr.forEach((n) => {
        if (isNaN(n)) {
            throw new Error("Average just wants numbers")
        } else {
            sum += n
        }
    })
    return sum / arr.length
}
//Using reduce
//return arr.reduce((acc, num) => acc + num, 0) / arr.length

//4. 
//La funzione createSlug sostituisce gli spazi con -."
// function createSlug(str) {
//     return str.toLowerCase().replaceAll(" ", "-")
// }

//5.
//La funzione isPalindrome verifica se una stringa è un palindromo.
function isPalindrome(str) {
    let newString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i]; // oppure newString = newString + str[i];
        if (str.trim() === newString){
            return true
        }
    }
}
//reverse e metodo array
// cont strInversed = str.split("").reverse().join("");
// return str === strInversed

//6
//La funzione createSlug lancia un errore se il titolo è vuoto o non valido
function createSlug(str) {
    if(!str){
        throw new Error("no empty or not valid")
    }
    return str.toLowerCase().replaceAll(" ", "-")
}

//7
///Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà 
// id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
// Creare uno o più test aggiuntivi che controllino che la struttura dati passati 
// sia conforme(ogni post ha le proprietà id, title e slug, viene passato un id numerico).



function findPostById(arr, id){
    return arr.find((p) => p.id === id)
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}