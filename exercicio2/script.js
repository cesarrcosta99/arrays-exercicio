const minhaString = "Eu não sou supersticioso, mas sou um pouco ____Confiante____.      ";
const arrayNumeros = [5, 2, 1, 4]
const arrayString = ["César", "Julio", "Breno"]
const arrayMisturado = [2, "Banana", true]
// Imprima a quantidade de itens de cada array (utilize um console.log() para cada 
// impressão)
console.log(arrayNumeros.length)
console.log(arrayString.length)
console.log(arrayMisturado.length)
// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o 
// terceiro item do terceiro array
console.log("1 item",arrayNumeros[0])
console.log("2 item",arrayString[1])
console.log("3 item",arrayMisturado[2])
// Verifique se um item está incluído no primeiro array e depois no terceiro array e 
//   imprima o resultado destas verificações no console.log(). A primeira impressão deve 
//        retornar um booleano true e a segunda deve retornar um booleano false.
console.log(arrayNumeros.includes(2))
console.log(arrayString.includes("Lucas"))