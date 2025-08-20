// var a = [1]
// var b = [1]

// console.log(a == b) // false, pois são objetos diferentes na memória

// var c = a

// console.log(a == c) // true
// console.log([1] == [1]) // false
// console.log(a === c) // true

// const names = ['Eduarda', 'João', 'Maria']
// const apenasComE = names.filter((n) => n.startsWith('E'))
// console.log(apenasComE) // ['Eduarda']

// variável que não muda, posso adicionar valores, mas não posso reatribuir
// const v1 = []

// v1[0] = 1
// v1[1] = 2

// console.log(v1)

// // funções
// arrow function
const hello = () => console.log('Hello')
hello()

const Jesus = () => console.log('Jesus')
Jesus()

const triplo = (n) => {
    return n * 3
}
console.log(triplo(6))










// // funções anônimas
// const dobro = function (n) {
//     return n * 2
// }

// console.log(dobro(8))

// const triplo = function (n=5){
//     return n * 3
// }
// console.log(triplo(3))
// console.log(triplo())

// const quadruplo = function (n = 4){
//     return n * 4
// }
// console.log(quadruplo())
// console.log(quadruplo(5))












// function hello(){
//     console.log("Hello, World!")
// }

// hello()
// hello('João')

// function hello(nome){
//     console.log(`Hello, ${nome}`)
// }

// hello('João')

// function soma(a,b){
//     return a + b
// }

// res = soma(2,3)

// console.log(res)
// console.log(soma(2,3))










// // // comparação
// // console.log(1 == 1) // true
// // console.log(1 == '1') // true
// // console.log(1 === "1") // false 
// // console.log(1 === 1) // true com tipos iguais
// // console.log(true == 1)
// // console.log(1 == [1]) 
// // console.log(null === null)
// // console.log([] = [])





// // // coerção
// // const n1 = 1
// // const n2 = '3'
// // // coerção implícita
// // console.log(n1 + n2)
// // // coerção explícita
// // const n4 = n1 + Number(n2)
// // console.log(n4)






// // var lang = "JavaScript"
// // console.log("Learning " + lang)

// // var lang = "Java"
// // console.log("Learning " + lang)

// // var age = 20
// // console.log(`Hi, ${name}`)

// // if (age >= 20){
// //     var name = "Eduarda"
// //     console.log(`Congrats, ${name}. You can drive now!`)
// // }




// // // declarando constantes
// // const nome = "Eduarda"
// // const idade = 27
// // // aspas simples e duplas com o mesmo efeito
// // const sexo = "M"
// // const endereco = "Rua das Flores, 123"
// // const outro_end = "Rua K, 2"
// // // declarando variáveis
// // // let: variável tem o escopo de bloco
// // {
// //     let x = 0
// // }
// // let a = 2
// // let b = "abcd"
// // // var: escopo da função onde é criado ou global
// // var c = 2 + 3
// // var d = "abcd"

// // console.log(a)
// // console.log(b)
// // console.log(c,d)