// Criar de forma literal
function fun1 (){};

// Armazenar em uma variavel, o nome da função acaba sendo o da variavel(Função anonima)
const fun2 = function (){};

// Armazenar em um array
const array = [function (a, b){return a + b }, fun1, fun2]
console.log(array[0](1,2));

// Armazenar em atributo de objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

// Função como parametro