const melhoresFrutas = ["Maça", "Banana", "Uva"]
const numeros = [10, 2, 3]
const politica = ["Lula", "Bolsonaro", 13, 22]

const copiaFrutas = melhoresFrutas.slice()
const copiaNumeros = numeros.slice()
const copiaPolitica = politica.slice()

//   Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para 
//        exibir o original e a cópia;
copiaFrutas.unshift(10)
console.log("Original", melhoresFrutas)
console.log("Copia Frutas", copiaFrutas)
// Remova o último item do segundo array. Utilize `console.log()` para exibir o original 
//     e a cópia;
copiaNumeros.pop()
console.log("original", numeros)
console.log("Copia Numeros", copiaNumeros)
// Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o 
//  original e a cópia;
copiaPolitica.splice(1, 1)
console.log("original", politica)
console.log("copia", copiaPolitica) 
