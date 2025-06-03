const teste1 = [2,5,7,4,3,1]

const number2 = teste1.map(n => n-1);

console.log(number2);


const teste2 = [8,4,6,2,1,5];

const mult = teste2.map(n => n*n);

console.log(mult);


/*
O método map percorre todos os elementos de um array 
e aplica uma operação que você define sobre cada um deles, 
retornando um novo array com os resultados dessa operação. 
A operação pode ser qualquer coisa, como transformação de valores, 
extração de partes de objetos, ou até cálculos.

Resumindo, a ideia do map é essa:

Percorrer cada elemento do array.

Aplicar uma função sobre ele.

Retornar um novo array com os resultados dessa função.

O array original não é alterado.

Você pode pensar no map como uma forma funcional de "mudar" os dados, 
sem modificar o original
*/