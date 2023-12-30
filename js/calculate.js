let a = Number(prompt("Ilk ededi daxil edin:"))
let b = Number(prompt("IKinci ededi daxil edin:"))
let operator = prompt("Gormek isdediyiniz emeli qeyd edin:")

const calc = (num1, num2, operator) => {
    switch (operator) {
        case "*":
            console.log(a * b)
            break;
        case "-":
            console.log(a - b)
            break;
        case "/":
            console.log(a / b)
            break;
        case "+":
            console.log(a + b)
            break;
        default:
            console.log("Emeli duzgun daxil edin!!!")
            break;
    }
}

calc(a,b,operator);