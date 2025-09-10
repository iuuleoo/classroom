const data = ["Leonardo", "leo@email.com"]

// Desestruturando array
const [username, email] = data
console.log("Nome:", username)
console.log("Email:", email)

const fruits = ["Banana", "Apple", "Orange"]

// Desestruturar somente o primeiro.
const [banana] = fruits
console.log(banana)


// ignorando o primeiro na desestruturação.
const [, apple] = fruits
console.log(apple)

// Ignorando o primeiro e o segundo na desestruturação.
const [,,orange] = fruits
console.log(orange)