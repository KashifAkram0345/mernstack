let a = 10;
let b = 2;
let operator = '+'; 
switch (operator) {
    case '+':
        console.log("Sum is:", a + b);
        break;
    case '-':
        console.log("Subtraction is:", a - b);
        break;
    case '*':
        console.log("Multiplication is:", a * b);
        break;
    case '/':
        if (b !== 0) {
            console.log("Division is:", a / b);
        } else {
            console.log("Error: Division by zero");
        }
        break;
    default:
        console.log("Invalid operator");
}
