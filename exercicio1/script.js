/*Construa um programa que:
a) Peça ao usuário que insira um número **par**
b) Imprima no console **o resto da divisão** desse número por 2.
c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
>💡  **Dica**:   não se esqueça de **converter** as respostas para o tipo número*/

//a) Peça ao usuário que insira um número **par**
const numeroPar = Number(prompt("Insira um numero par."))

//b) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
console.log(Number(numeroPar % 2))

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//O Padrao foi, todo numero par retorna o numero 0.

//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
//Todo numero impar retorna o numero 1.