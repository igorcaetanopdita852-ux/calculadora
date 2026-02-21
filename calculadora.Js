const soma = (num1, num2 ) =>  num1 + num2;
const subtração = (num1, num2) => num1 - num2;
const multiplicação = (num1, num2) => num1 * num2;
const divisão = (num1, num2) => num1 / num2;

const mostrarresultado = (num1, num2) => {
    console.log(`Soma entre ${num1} e ${num2} da`, soma(num1, num2));
    console.log(`Subtração entre ${num1} e ${num2} da`, subtração(num1, num2));
    console.log(`Multiplicação entre ${num1} e ${num2} da`, multiplicação(num1, num2));
    console.log(`Divisão entre ${num1} e ${num2} da`, divisão(num1, num2));
};

mostrarresultado(50, 4)