/*a) 5 é maior que 20 e também é menor que 2;
b) 5 é igual a 5 ou é igual a “5”;
c) negação de (vinte é maior que cinquenta)
d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)*/

const operacaoA = (5>20 && 5<2)
console.log(operacaoA)

const operacaoB = (5 === 5 || 5 === `5`)
console.log(operacaoB)

const operacaoC = !(20>50)
console.log(operacaoC)

const operacaoD = !(20>50 || 50>70)
console.log(operacaoD)