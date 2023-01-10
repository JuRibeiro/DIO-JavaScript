// como detectar um array
//let array = ['string', 1, true];
//    console.log(array);

let array2 = ['string', 1, true, ['array1'], ['array3']];
    console.log(array2[0]);

//forEach() itera um array
array2.forEach(function(item, indice) {console.log(item, indice)});

//push() add item no final do array
array2.push(34);
    console.log(array2);

//pop() remove item no final do array
array2.pop();
    console.log(array2);

//shift() remove item no inicio do array
array2.shift();
    console.log(array2);

//unshift() add item no inicio do array
array2.unshift('novo item');
    console.log(array2);

//indexOf() retorna indice de um valor
console.log(array2.indexOf(true));

//splice() remove ou substitui um item pelo indice
array2.splice(0, 3);
    console.log(array2);

//slice() retorna uma parte de um array existente
let novoArray = array2.slice(0,3);
    console.log(novoArray);


let object = { string: 'string', number: 1, boolean: true, array: ['array'], 
objectIntern: {objectIntern: 'objeto interno'}};

console.log(object.Boolean);

//desestruturação
var string = object.string;
    console.log(string);

var arrayInterno = object.array;
    console.log(arrayInterno);

var {string, boolean, objectIntern} = object;
    console.log(string, boolean, objectIntern);








