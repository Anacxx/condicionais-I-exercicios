/*Escreva uma função que receba três valores. Uma idade, 
um booleano que responde se a pessoa terminou ou não o ensino médio,
e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

<details>

<summary>Exemplo</summary>

Caso a primeira pessoa tenha idade >= 18:

<b>"A pessoa é maior de idade"</b>

e caso não seja:

<b>"A pessoa é menor de idade"</b>

</details>*/
const idade = Number(prompt("Qual é sua idade?"))
const ensinoMedio = confirm("terminou ensino médio?")
const ensinoSuperior = confirm("terminou ensino médio?")
function verificarEscolaridade(){
    if(idade >= 18){
        console.log(`É maior de idade.`)
    }else{
        console.log(`É menor de idade.`)
    }
    if(ensinoMedio === true){
        console.log(`Ensino médio completo.`)
    }else{
        console.log(`Não completou o ensino médio.`)
    }
    if(ensinoSuperior === true){
        console.log(`Está no ensino superior`)
    }else{
        console.log(`Não está no ensino superior.`)
    }
}
console.log(verificarEscolaridade())