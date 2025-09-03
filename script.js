function sumUntil(number){
    return number >=0
    ? Promise.resolve((number * (number + 1)/ 2))
    : Promise.reject("Only positive numbers are allowed")
}

// async await
async function chamadaAssincrona(){
    try {
        res = await sumUntil(10)
        console.log(res)
        res1 = res * 10
        console.log(res1)
    }catch(err){
        console.log(err)
    }

} 
chamadaAssincrona()


// then catch 
// somaAte(10)
//     .then((res) => {
//         console.log(res)
//         return res
//     })
//     .then((res) => {
//         res1 = res * 10
//         console.log(res1)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })



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
// const hello = () => console.log('Hello')
// hello()

// const Jesus = () => console.log('Jesus')
// Jesus()

// const triplo = (n) => {
//     return n * 3
// }
// console.log(triplo(6))

// const nomes = ['Eduarda','Emanuelle', 'Eduardo'];

// const apenasComE = nomes.filter((n) => n.startsWith('E'));

// console.log("Apenas com E");
// console.log(apenasComE);

// closure
// armazenando uma função em uma variável
// let umaFuncao = function(){
//     console.log("Fui armazenada em uma variável")
// }
// umaFuncao()
// // função que recebe e executa outra função
// function f(funcao){
//     funcao()
// }
// f(umaFuncao)
// f(() => console.log(3*2))

// f(function(){
//     console.log('Fui criada nos parênteses de f')
//     }
// )

// function g(){
//     function outraFuncao(){
//         console.log('Fui criada em g')
//     }
//     return outraFuncao
// }
// gResult = g()
// console.log(gResult)
// gResult()

// g()()

// f(g())

// function f(){
//     let name = 'Eduarda'
//     function g(){
//         console.log(name)
//     }
//     g()
// }
// f()
// // closure 
// function hello(){
//     let name = 'Eduarda'
//     return function(){
//         console.log(`Hello, ${name}`)
//     }
// }
// helloResult = hello()
// helloResult() // Hello, Eduarda

// function saudacaoFactory(saudacao, name){
//     return function (){
//         console.log(saudacao + ',' + name)
//     }
// }

// let helloDuda = saudacaoFactory('Hello', 'Duda')
// let byeDuda = saudacaoFactory('Bye', 'Duda')

// helloDuda()
// byeDuda()

// function counterFactory(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont++
//     function f2(){
//         console.log(cont)
//     }
//     return {f1, f2}
// }

// let eAgoraResult = eAgora()

// eAgoraResult.f1() // 1
// eAgoraResult.f2() // 2













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

// function saudacaoFactory(saudacao, name){
//     return function (){
//         console.log(saudacao + ',' + name)
//     }
// // }

// // eu
// function calculadora(){
//     function soma(a, b){
//         return a + b;
//     }

//     function subtracao(a, b){
//         return a - b;
//     }
// } return console.log(calculadora.soma(3,6))




// mazzei
// let calculadora = {    
//     soma: 12,
//     soma: (a,b) => a + b,
//     subtracao: function (a,b) {
//         return a - b;
//     },
// };

// console.log(calculadora.soma(3,4))
// console.log(calculadora.subtracao(5,2))
// console.log("valor de soma: ", calculadora.soma);