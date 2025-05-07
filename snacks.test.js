
const { getInitials,createSlug, average, isPalindrome, findPostById, addPosts, removePost } = require("./snacks.js")


//ogni describe raccoglie i test fatti
describe('manipolazione di array', () => {
    //raccoglie i test sugli array
})

//1 - "La funzione getInitials restituisce le iniziali di un nome completo."
test(`La funzione getInitials restituisce le iniziali di un nome completo`, () => {
    expect(getInitials('Rita Urbani')).toBe("R.U")
    expect(getInitials('rita urbani')).toBe("R.U")
    expect(getInitials('rita  urbani')).toBe("R.U")
})



//2.La funzione createSlug restituisce una stringa in lowercase.
// test(`La funzione createSlug restituisce una stringa in lowercase`, () => {
//     expect(createSlug("CIAO RITA")).toBe("ciao rita")
//     expect(createSlug("Ciao")).toBe("ciao")
// })

//3. La funzione average calcola la media aritmetica di un array di numeri."
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([4,3,5])).toBe(4)
    expect(() => average([4,3,"ciao"])).toThrow()
})    

//4.La funzione createSlug sostituisce gli spazi con -."
// test(`La funzione createSlug restituisce una stringa in lowercase`, () => {
//     expect(createSlug("CIAO RITA bella")).toBe("ciao-rita-bella")
    
// })

//5.La funzione isPalindrome verifica se una stringa è un palindromo.
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect((isPalindrome("anna"))).toBeTruthy()
    // expect((isPalindrome("anna "))).toBeTruthy()
    expect((isPalindrome("rita"))).toBeFalsy()
})

//6.La funzione createSlug lancia un errore se il titolo è vuoto o non valido"
test(`La funzione createSlug lancia un errore se il titolo è vuoto o non valido`, () => {
    expect(createSlug("CIAO RITA bella")).toBe("ciao-rita-bella")
    expect(() => createSlug("")).toThrow()//posso anche passare la stringa che mi aspetto throw abbia per msg
    expect(() => createSlug(null)).toThrow()
    
})

//array 

let posts;

beforeEach(() => {//array sara cosi tra un test e un altro
    posts = [
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
})

afterEach(() => {//svuotiamo alla fine di ogni test
    posts = []
})


//7. La funzione findPostById restituisce il post corretto dato l’array di post e l’id
//to check ogni post ha le proprietà id, title e slug, viene passato un id numerico
test('La funzione findPostById restituisce il post corretto dato l array di post e l id', () => {
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: "introduction js", slug: "introduction-js"})
    expect(findPostById(posts, 4)).toBe(null)
    expect(() => findPostById(posts,"ciao" )).toThrow("ciao non e un id")
    expect(() => findPostById([32,67], 2 )).toThrow("l array non e valido")
})


///////BONUS//////

//lavoraimo su aggiungere e rimuovere da array quindi e importante resettare ogni volta

//8.Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più."
test('Dopo aver aggiunto un post con la funzione addPost, l\`array posts deve contenere un elemento in più', () => {
    addPosts(posts, {
        id: 4,
        title: "study typescript",
        slug: "study-typescript"
    })
    expect(posts).toHaveLength(4)

})

//8.Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno."
test(`Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno`, () => {
    removePost(posts, {
        id: 2,
        title: "study react",
        slug: "study-react"
    })
    expect(posts).toHaveLength(2)//noi pariamo dall originale di 3 elem
})

//9. Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.
test(`Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.`, () => {
    expect(() => addPosts(posts, {id: 1, title: "introduction js", slug: "introduction-js"})).toThrow('id gia esistente')
})