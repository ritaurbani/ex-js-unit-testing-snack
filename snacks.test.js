
const { getInitials,createSlug, average, isPalindrome, findPostById } = require("./snacks.js")


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


//7. La funzione findPostById restituisce il post corretto dato l’array di post e l’id
//to check ogni post ha le proprietà id, title e slug, viene passato un id numerico
test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: "introduction js", slug: "introduction-js"})
})