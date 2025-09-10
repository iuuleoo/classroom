"use strict"

function showMessage() {
    let personName = "Leonardo"

    console.log("Olá", personName)
}

showMessage()

class Student {
    get point(){
        return 7
    }
}

let student = new Student()
//student.point = 10

console.log(student.point)


// Tenta deletar uma propriedade de um obejeto que não posso deletar.
//delete window.document


// Quando passamos parâmetros duplicados
/*function sum(a, a, c) {
   return a + a + c
}

const result = sum(1,3,2)
console.log("RESULTADO:", result)
*/