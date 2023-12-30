let a =prompt("Ucbucagin 1-ci terefini daxil edin:");
let b =prompt("Ucbucagin 2-ci terefini daxil edin:");
let c = prompt("Ucbucagin 3-cu terefini daxil edin:");

const triangleType = (num1, num2, num3) => {
    if (a == b == c) {
        alert("Ucbucaq berabertereflidi");
    } else if (a == b || b == c || a == c) {
        alert("Ucbucaq beraberyanlidi");
    } else if (a != b && b != c && a != c) {
        alert("Ucbucaq korbucaqdi");
    } else {
        alert("Unsucces")
    }
}

triangleType(a,b,c);