//tipos primitivos

//boolean V ou F
var vouf = false;
    //resultado da variável
    console.log(vouf);
    //validar tipo da variável
    console.log(typeof (vouf));

//numero
var numero = 1;
    console.log(numero);

//string
var nome = 'dia';
    console.log(typeof(nome));

//var let const

var escopoGlobal = 'global';
    console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

// '=' significa atribuição 
var atribui = 'Juliana';

// '==' compara 
var compara = '0'== 0;
    console.log(compara);

// '===' valida se é estritamente igual, inclusive o tipo
// valores iguais mas tipos diferentes neste caso
var comparaIdentico = '0' === 0;
    console.log(comparaIdentico);

//adição
var adicao = 1+1;
    console.log(adicao);

//subtração
var subtrai = 2-1;
    console.log(subtrai);

//multiplicação
var multiplica = 2*3;
    console.log(multiplica);

//divisão
var divide = 3/3;
    console.log(divide);

//divisão, porém desta forma é apresentado o resto da divisão
var divideResto = 5 % 2;
    console.log(divideResto);

//potenciação
var potencia = 2 ** 10;
    console.log(potencia);

// && e todos os valores devem ser verdadeiros
// || ou considera que qualquer um dos valores seja true
// ! não - inverte o valor de true para false e vice-versa
