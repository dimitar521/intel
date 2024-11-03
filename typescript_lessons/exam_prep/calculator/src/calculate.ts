function calculate(num1: number, operator: string, num2: number): void {
    let result: number;

    switch(operator) {

        case '+' :
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
            console.log("Error")
            return;
    }
    console.log(result.toFixed(2));

}
calculate(5, "+", 10);
calculate(25.5, "-", 3);
calculate(9, "/", 2);
calculate(7, "*", 5);