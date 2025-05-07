
const { getInitials,createSlug, average } = require("./snacks.js")


//1 - "La funzione getInitials restituisce le iniziali di un nome completo."
test(`La funzione getInitials restituisce le iniziali di un nome completo`, () => {
    expect(getInitials('Rita Urbani')).toBe("R.U")
    expect(getInitials('rita urbani')).toBe("R.U")
    expect(getInitials('rita  urbani')).toBe("R.U")
})



//2.La funzione createSlug restituisce una stringa in lowercase.
test(`La funzione createSlug restituisce una stringa in lowercase`, () => {
    expect(createSlug("CIAO RITA")).toBe("ciao rita")
    expect(createSlug("Ciao")).toBe("ciao")
})

//3. La funzione average calcola la media aritmetica di un array di numeri."
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([4,3,5])).toBe(4)
})    