const product = {
    description: "Teclado",
    price: 150
}

const { description, price} = product
console.log("Descrição:", description)
console.log("Preço: R$", price)

function newProduct({description, price}) {
    console.log("## NOVO PRODUTO ###")
   console.log("Descrição:", description)
   console.log("Preço:", price)
}

newProduct({ description: "Mouse", price: 70})