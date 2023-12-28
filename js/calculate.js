let eded1 = prompt("Ilk ededi daxil edin:")
let emel = prompt("Gormek isdediyiniz emeli qeyd edin:")
let eded2 = prompt("IKinci ededi daxil edin:")

switch (emel) {
    case "*":
        console.log(eded1 * eded2)
        break;
    case "-":
        console.log(eded1 - eded2)
        break;
    case "/":
        console.log(eded1 / eded2)
        break;
    case "+":
        console.log(eded1 + eded2)
        break;
    default:
        console.log("Emeli duzgun daxil edin!!!")
        break;
}