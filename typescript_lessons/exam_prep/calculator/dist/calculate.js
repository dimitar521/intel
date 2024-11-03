function calculate(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Error");
            return;
    }
    console.log(result.toFixed(2));
}
calculate(5, "+", 10);
calculate(25.5, "-", 3);
calculate(9, "/", 2);
calculate(7, "*", 5);
