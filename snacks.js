
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
//"La funzione average calcola la media aritmetica di un postsay di numeri."
function average(posts) {
    let sum = 0
    posts.forEach((n) => {
        if (isNaN(n)) {
            throw new Error("Average just wants numbers")
        } else {
            sum += n
        }
    })
    return sum / posts.length
}
//Using reduce
//return posts.reduce((acc, num) => acc + num, 0) / posts.length

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
    }
    if (str.trim() === newString){
            return true
        }
}
//reverse e metodo postsay
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
///Crea un postsay di oggetti posts, in cui ogni oggetto ha le proprietà 
// id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// "La funzione findPostById restituisce il post corretto dato l’postsay di post e l’id"
// Creare uno o più test aggiuntivi che controllino che la struttura dati passati 
// sia conforme(ogni post ha le proprietà id, title e slug, viene passato un id numerico).


const posts = [
    {
        id: 1,
        title: "introduction js",
        slug: "introduction-js"
    },
    {
        id: 2,
        title: "study react",
        slug: "study-react"
    },
    {
        id: 3,
        title: "study python",
        slug: "study-python"
    }
]

function findPostById(posts, id){
    if(isNaN(id)){
        throw new Error(`${id} non e un id`)
    }
    posts.forEach((p) => {
        if(p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ){
            throw new Error("l array non e valido")
        }
    })
    return posts.find((p) => p.id === id) || null
}

function addPosts(posts, post) {
    //trasformato array di post in array di ids
    const ids = posts.map((p) => p.id) 
    if(ids.includes(post.id)){
        throw new Error('id gia esistente')
    }
    posts.push(post)
}
function removePost(posts, id) {//per trovare elem specifico dobbiamo trovare indice
   const index = posts.findIndex((p) => p.id === id)
   posts.splice(index, 1)
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById,
    addPosts,
    removePost
}