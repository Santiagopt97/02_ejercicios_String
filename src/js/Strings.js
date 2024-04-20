// # punto 1 Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos.

const num1 = 10
const num2 = 5

console.info("La suma de los numeros es: ", num1 +num2)

// # Punto 2 Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.

let simpleString1 = "Hola"
let simpleString2 = "Mundo"

console.info(simpleString1.length + simpleString2.length)

// # Punto 3 Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript" y stringUsingString2 con el valor "Ejercicios".

const stringUsingString1 = String("JavaScript")
const stringUsingString2 = String("Ejercicios")

// # Punto 4 Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 con el valor "Strings".

let stringUsingNewString1 = new String("Concatenar")
let stringUsingNewString2 = new String("Strings")

// # Punto 5 Calcula e imprime en consola la posición del substring "la" en la variable simpleString1.

console.info(simpleString1.search("la"))

// # Punto 6 Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola.

console.info(simpleString2.includes("ndo"))

// # Punto 7 Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola.

console.info(simpleString1.concat(" ",simpleString2))

// # punto 8 Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola.

console.info(simpleString1 + " " + simpleString2)

// # Punto 9 Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola.

console.info(`${simpleString1} ${simpleString2}`)

// # Punto 10 Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola.

let stringWithSpaces1 = " TrimStart"
let stringWithSpaces2 = "TrimEnd "

console.info(stringWithSpaces1.trimStart())
console.info(stringWithSpaces2.trimEnd())

// # Punto 11 Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola.

console.info(simpleString1.replace("o", "i"))

// # Punto 12 Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola.

console.info(simpleString2.slice(0,3))

// # Punto 13 Utiliza el método substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2 e imprime el resultado en consola.

console.info(simpleString2.substring(2))

// # Punto 14 Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola.

console.info(simpleString1.repeat(2))

// # Punto 15 Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.

console.info("Esto es una oración de ejemplo".split(" "))

// # Punto 16 Convierte la variable simpleString2 a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.

console.info(simpleString2.toUpperCase())

// # Punto 17 Convierte la variable simpleString1 a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.

console.info(simpleString1.toLowerCase())

// # Punto 18 Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().

let varBoleana = true

console.info(typeof(varBoleana))

// # Punto 19 Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.

let arreglo = ["Val","santiago","Juanjo"]

console.info(arreglo.length)

// # Punto 20 Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.

let objeto = {nombre: "Santiago", apellido: "Pineda", edad: 20}
console.info(objeto.apellido)

// # Punto 21 Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().

let nulo = null
console.info(typeof(nulo))

// # Punto 22 Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().

let indefinido 
console.info(typeof(indefinido))

// # Punto 23 Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

let decimal = 5.5
console.info(typeof(decimal))

// # Punto 24 Declara una variable negativo y asígnale un número negativo. Muestra en consola su tipo de dato utilizando el operador typeof().

const negativo = -6
console.info(typeof(negativo))

// # Punto 25 Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola.
console.info("Casa".indexOf("a"))

// # Punto 26 Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola.
console.info("Javascript".includes("Script"))

// # Punto 27 Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola.
console.info("Hola".concat("Mundo"))

// # Punto 28 Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.
console.info("Hola" + "Mundo")

// # Punto 29 Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola.
console.info(`Hola Mundo`)

// # Punto 30 Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ". Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola.
let cadenaConEspacios = " Ejemplo con espacios "
console.info(cadenaConEspacios.trimStart())
console.info(cadenaConEspacios.trimEnd())

// # Punto 31 Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.
let cadena = "El cielo es azul"
console.info(cadena.replace("azul", "rojo"))

// # Punto 32 Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola.

// # Punto 33 Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript" que comience en el índice 2 e imprime el resultado en consola.
let cadena2 = "JavaScript"
console.info(cadena2.substring(2))

// # Punto 34 Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola.
let cadena3 = "Hola"
console.info(cadena3.repeat(3))

// # Punto 35 Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.
let cadena4 = "Esto es una oración de ejemplo"
console.info(cadena4.split(" "))

// # Punto 36 Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.
console.info(cadena2.toUpperCase())

// # Punto 37 Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.
let cadena5 = "EJEMPLO"
console.info(cadena5.toLowerCase())

// # Punto 38 Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof().
let numero = 10
console.info(typeof numero)

// # Punto 39 Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().
console.info(typeof(varBoleana))

// # Punto 40 Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.
console.info(arreglo.length)

// # Punto 41 Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.
console.info(objeto.apellido)

// # Punto 42 Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().
console.info(typeof nulo)

// # Punto 43 Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().
console.info(typeof indefinido)

// # Punto 44 Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().

console.info(typeof decimal)
