
//1
//"La funzione getInitials restituisce le iniziali di un nome completo."
function getInitials(wholeName) {
    const [first, last] = wholeName.split(" ").filter(str => str !== '');
    return `${first.charAt(0).toUpperCase()}.${last.charAt(0).toUpperCase()}`
}

//2.
//La funzione createSlug restituisce una stringa in lowercase.
function createSlug(str) {
    return str.toLowerCase()
}

//3.
//"La funzione average calcola la media aritmetica di un array di numeri."
function average(arr){
    let sum = 0
    arr.forEach((n) => {
        sum += n
    })
    return sum/arr.length
}
module.exports = {
    getInitials,
    createSlug,
    average
}